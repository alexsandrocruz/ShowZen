import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-components-demo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './components-demo.component.html',
    styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent {
    isButtonLoading = false;

    simulateLoading() {
        this.isButtonLoading = true;
        setTimeout(() => {
            this.isButtonLoading = false;
        }, 2000);
    }
}
