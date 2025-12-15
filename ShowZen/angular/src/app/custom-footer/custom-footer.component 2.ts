import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-footer-customizer',
    standalone: true,
    template: '',
})
export class FooterCustomizerComponent implements OnInit {
    private document = inject(DOCUMENT);
    private renderer = inject(Renderer2);

    ngOnInit() {
        // Use setTimeout to ensure footer is rendered
        setTimeout(() => this.customizeFooter(), 100);
    }

    private customizeFooter() {
        const footer = this.document.querySelector('.lpx-footer-container');
        if (!footer) return;

        // Customize copyright text
        const copyright = footer.querySelector('.lpx-footer-copyright');
        if (copyright) {
            // Remove all child elements
            while (copyright.firstChild) {
                copyright.removeChild(copyright.firstChild);
            }

            // Create custom copyright text with Sapienza link
            const text = this.renderer.createText('© 2025 ShowZen. Desenvolvido com ❤️ pela ');
            const link = this.renderer.createElement('a');
            this.renderer.setAttribute(link, 'href', 'https://www.sapienzae.com.br');
            this.renderer.setAttribute(link, 'target', '_blank');
            this.renderer.setAttribute(link, 'rel', 'noopener noreferrer');
            this.renderer.setStyle(link, 'color', 'var(--lpx-primary, #5b6fe3)');
            this.renderer.setStyle(link, 'font-weight', '500');
            this.renderer.setStyle(link, 'text-decoration', 'none');
            const linkText = this.renderer.createText('Sapienza');
            this.renderer.appendChild(link, linkText);

            this.renderer.appendChild(copyright, text);
            this.renderer.appendChild(copyright, link);
        }

        // Customize footer links
        const footerLinks = footer.querySelector('.lpx-footer-links');
        if (footerLinks) {
            const links = footerLinks.querySelectorAll('a');

            if (links[0]) {
                this.renderer.setAttribute(links[0], 'href', '/about');
                links[0].textContent = 'Sobre';
            }

            if (links[1]) {
                this.renderer.setAttribute(links[1], 'href', '/privacy');
                links[1].textContent = 'Privacidade';
            }

            if (links[2]) {
                this.renderer.setAttribute(links[2], 'href', 'https://www.sapienzae.com.br/contactus');
                this.renderer.setAttribute(links[2], 'target', '_blank');
                this.renderer.setAttribute(links[2], 'rel', 'noopener noreferrer');
                links[2].textContent = 'Contato';
            }
        }
    }
}
