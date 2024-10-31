import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'base-dashboard-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './base-dashboard.component.html',
  styleUrl: './base-dashboard.component.scss'
})
export default class BaseDashboardComponent {

}
