import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="d-flex align-items-center" style="font-size: 1.25rem;">
      <i class="fa fa-calendar-alt text-primary me-2 fa-lg"></i>
      <span class="fw-bold logo-text">ShowZen</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .logo-text {
      color: var(--lpx-logo-color, #fff);
      letter-spacing: -0.5px;
    }
  `]
})
export class LogoComponent { }
