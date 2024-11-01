import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { sidebarLinks } from '../sidebar-item/sidebar-items-list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarItemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public sidebarItems = sidebarLinks;


  
}
