import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conflict-alert',
  templateUrl: './conflict-alert.component.html',
  styleUrls: ['./conflict-alert.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ConflictAlertComponent {
  @Input() conflictsCount = 0;
}
