import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ConfigStateService, SessionStateService } from '@abp/ng.core';
import { AuthService } from '@abp/ng.core';

interface Language {
    cultureName: string;
    displayName: string;
    flagIcon?: string;
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isMobileMenuOpen = false;
    isScrolled = false;
    isLanguageDropdownOpen = false;
    isAdminDropdownOpen = false;

    languages: Language[] = [
        { cultureName: 'pt-BR', displayName: 'Português (Brasil)', flagIcon: '🇧🇷' },
        { cultureName: 'en', displayName: 'English', flagIcon: '🇺🇸' },
        { cultureName: 'es', displayName: 'Español', flagIcon: '🇪🇸' }
    ];

    constructor(
        private router: Router,
        private configState: ConfigStateService,
        private sessionState: SessionStateService,
        private authService: AuthService
    ) { }

    /**
     * Toggle mobile sidebar menu
     */
    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        // Prevent body scroll when menu is open
        if (this.isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    /**
     * Close mobile menu
     */
    closeMobileMenu(): void {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = '';
    }

    /**
     * Navigate and close mobile menu
     */
    navigateTo(path: string): void {
        this.router.navigate([path]);
        this.closeMobileMenu();
    }

    /**
     * Track scroll to add shadow to navbar
     */
    @HostListener('window:scroll')
    onScroll(): void {
        this.isScrolled = window.scrollY > 10;
    }

    /**
     * Toggle language dropdown
     */
    toggleLanguageDropdown(): void {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
        this.isAdminDropdownOpen = false; // Close admin dropdown when opening language
    }

    /**
     * Toggle admin dropdown
     */
    toggleAdminDropdown(): void {
        this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
        this.isLanguageDropdownOpen = false; // Close language dropdown when opening admin
    }

    /**
     * Change language
     */
    changeLanguage(cultureName: string): void {
        this.sessionState.setLanguage(cultureName);
        this.isLanguageDropdownOpen = false;
        window.location.reload(); // Reload to apply language change
    }

    /**
     * Logout
     */
    logout(): void {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    /**
     * Navigate to login
     */
    login(): void {
        this.router.navigate(['/account/login']);
    }

    /**
     * Get current language
     */
    get currentLanguage(): Language {
        const currentCulture = this.sessionState.getLanguage();
        return this.languages.find(l => l.cultureName === currentCulture) || this.languages[0];
    }

    /**
     * Get current user info from ABP config
     */
    get currentUser() {
        return this.configState.getOne('currentUser');
    }

    get isAuthenticated(): boolean {
        return this.configState.getOne('currentUser')?.isAuthenticated ?? false;
    }
}
