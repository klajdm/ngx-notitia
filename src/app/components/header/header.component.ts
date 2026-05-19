import {
  Component,
  ChangeDetectorRef,
  inject,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { GhButtonModule } from '@ctrl/ngx-github-buttons';
import { ThemeService } from '../../services/theme.service';
import { LucideMenu, LucideSun, LucideMoon } from '@lucide/angular';

@Component({
  selector: 'app-header',
  imports: [GhButtonModule, LucideMenu, LucideSun, LucideMoon],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">
        <!-- Hamburger for mobile -->
        <button
          class="lg:hidden relative flex items-center justify-center mr-4 p-2 focus:outline-none rounded-md z-50 theme-toggle"
          aria-label="Open menu"
          (click)="onToggleMobileMenu()"
        >
          <svg lucideMenu class="w-6 h-6"></svg>
        </button>

        <!-- Logo -->
        <div class="flex-1 flex justify-start items-center">
          <a href="/" class="flex items-center">
            <img src="logo.png" alt="ngx-notitia logo" class="h-10 w-10 md:h-12 md:w-12 mr-3" />
            <span class="text-xl md:text-2xl font-bold text-primary">NGX-NOTITIA</span>
          </a>
        </div>

        <!-- Theme toggle (mobile only) -->
        <button
          (click)="themeService.toggle()"
          class="theme-toggle lg:hidden"
          [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          @if (themeService.isDark()) {
            <svg lucideSun class="w-5 h-5"></svg>
          } @else {
            <svg lucideMoon class="w-5 h-5"></svg>
          }
        </button>

        <!-- Support, GitHub links + theme toggle (desktop only) -->
        <div class="hidden lg:flex items-center space-x-4">
          <a
            href="https://github.com/klajdm/ngx-notitia/discussions"
            target="_blank"
            class="nav-link text-sm font-medium flex items-center"
          >
            Support
            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            href="https://github.com/klajdm/ngx-notitia"
            target="_blank"
            class="nav-link text-sm font-medium flex items-center"
          >
            GitHub
            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <gh-button user="klajdm" repo="ngx-notitia" [count]="true"></gh-button>

          <button
            (click)="themeService.toggle()"
            class="theme-toggle"
            [attr.aria-label]="
              themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'
            "
          >
            @if (themeService.isDark()) {
              <svg lucideSun class="w-5 h-5"></svg>
            } @else {
              <svg lucideMoon class="w-5 h-5"></svg>
            }
          </button>
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent implements AfterViewInit {
  protected themeService = inject(ThemeService);
  private cdr = inject(ChangeDetectorRef);

  // Output event for mobile menu toggle
  @Output() toggleMobileMenu = new EventEmitter<void>();

  ngAfterViewInit() {
    // gh-button resolves its fetch outside Angular's zone; trigger CD after it settles
    setTimeout(() => this.cdr.markForCheck(), 500);
  }

  public onToggleMobileMenu(): void {
    this.toggleMobileMenu.emit();
  }
}
