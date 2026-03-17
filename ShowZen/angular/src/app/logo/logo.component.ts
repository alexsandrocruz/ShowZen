import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="d-flex align-items-center">
      <img src="assets/images/showzen-logo.svg" alt="ShowZen Logo" height="56">
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
