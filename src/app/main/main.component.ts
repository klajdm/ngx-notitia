import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '../components/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, MobileMenuComponent, FooterComponent, RouterModule],
  templateUrl: './main.component.html',
})
export class MainComponent {
  mobileDrawerOpen = signal(false);
  mobileDrawerVisible = signal(false);

  toggleMobileDrawer(): void {
    if (this.mobileDrawerOpen()) {
      this.closeMobileDrawer();
    } else {
      this.openMobileDrawer();
    }
  }

  openMobileDrawer(): void {
    this.mobileDrawerVisible.set(true);
    setTimeout(() => this.mobileDrawerOpen.set(true), 10);
  }

  closeMobileDrawer(): void {
    this.mobileDrawerOpen.set(false);
    setTimeout(() => this.mobileDrawerVisible.set(false), 300);
  }
}
