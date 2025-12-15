import { Component, AfterViewInit, inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PremiumFooterComponent } from '../premium-footer/premium-footer.component';

@Component({
    selector: 'app-footer-injector',
    standalone: true,
    imports: [PremiumFooterComponent],
    template: '',
})
export class FooterInjectorComponent implements AfterViewInit {
    private document = inject(DOCUMENT);
    private renderer = inject(Renderer2);
    private platformId = inject(PLATFORM_ID);

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => this.injectFooter(), 100);
        }
    }

    private injectFooter() {
        // Find the main app content area
        const appContainer = this.document.querySelector('.lpx-layout-wrapper, .container-fluid, body');

        if (appContainer) {
            // Check if footer already exists
            const existingFooter = this.document.querySelector('app-premium-footer');
            if (!existingFooter) {
                // Create footer element
                const footer = this.document.createElement('app-premium-footer');

                // Append to body or container
                this.document.body.appendChild(footer);

                // Make sure body uses flexbox to push footer to bottom
                this.renderer.setStyle(this.document.body, 'display', 'flex');
                this.renderer.setStyle(this.document.body, 'flex-direction', 'column');
                this.renderer.setStyle(this.document.body, 'min-height', '100vh');

                const mainContent = this.document.querySelector('.lpx-layout-wrapper, .container-fluid');
                if (mainContent) {
                    this.renderer.setStyle(mainContent, 'flex', '1');
                }
            }
        }
    }
}
