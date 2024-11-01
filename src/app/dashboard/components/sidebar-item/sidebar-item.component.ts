import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarLink } from './sidebar-items-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {

  public icon = input<string | undefined>();
  public path = input<string | undefined>();
  public title = input<string>();
  public submenu = input<SidebarLink[] | undefined>();

  public toggleSubmenu = signal<boolean>(false);

  onClickSubmenu(){
    // el valor contrario del booleano
    this.toggleSubmenu.set(!this.toggleSubmenu());
  }

}