import { Component } from '@angular/core';
import { DynamicLayoutComponent } from '@abp/ng.core';
import { LoaderBarComponent } from '@abp/ng.theme.shared';
import { PremiumFooterComponent } from './layout/premium-footer/premium-footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar />
    <app-navbar></app-navbar>
    <abp-dynamic-layout />
    <app-premium-footer></app-premium-footer>
  `,
  imports: [LoaderBarComponent, NavbarComponent, DynamicLayoutComponent, PremiumFooterComponent],
})
export class AppComponent { }
