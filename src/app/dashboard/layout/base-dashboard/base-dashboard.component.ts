import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'base-dashboard-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './base-dashboard.component.html',
  styleUrl: './base-dashboard.component.scss'
})
export default class BaseDashboardComponent {

}
