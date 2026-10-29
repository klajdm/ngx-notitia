import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { MobileMenuComponent } from '../components/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, MobileMenuComponent, FooterComponent, RouterModule],
  templateUrl: './main.component.html',
})
export class MainComponent {
  private router = inject(Router);
  private scrollContainer = viewChild.required<ElementRef<HTMLElement>>('scrollContainer');

  mobileDrawerOpen = signal(false);
  mobileDrawerVisible = signal(false);

  constructor() {
    // Content scrolls inside a container, not the window, so the router's own
    // scroll handling doesn't apply: reset it on every navigation.
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.scrollContainer().nativeElement.scrollTo({ top: 0 }));
  }

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
