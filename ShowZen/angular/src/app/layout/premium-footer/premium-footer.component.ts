import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-premium-footer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './premium-footer.component.html',
    styleUrls: ['./premium-footer.component.scss']
})
export class PremiumFooterComponent {
    currentYear = new Date().getFullYear();
}
