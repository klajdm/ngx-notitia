import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideX, LucideExternalLink } from '@lucide/angular';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  imports: [RouterModule, LucideX, LucideExternalLink],
})
export class MobileMenuComponent {
  // Output event to close the mobile menu
  @Output() closeMenu = new EventEmitter<void>();

  onMenuItemClick() {
    // Close the mobile menu when a menu item is clicked
    this.closeMenu.emit();
  }

  onCloseClick() {
    this.closeMenu.emit();
  }
}
