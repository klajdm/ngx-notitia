import { Component, ChangeDetectorRef, inject, AfterViewInit } from '@angular/core';
import { GhButtonModule } from '@ctrl/ngx-github-buttons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [GhButtonModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">
        <!-- Logo -->
        <div class="flex-1 flex justify-start items-center">
          <a href="/" class="flex items-center">
            <img src="logo.png" alt="ngx-notitia logo" class="h-10 w-10 md:h-12 md:w-12 mr-3" />
            <span class="text-xl md:text-2xl font-bold text-primary">NGX-NOTITIA</span>
          </a>
        </div>

        <!-- Links -->
        <div class="flex items-center space-x-4">
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

          <!-- Theme toggle -->
          <button
            (click)="themeService.toggle()"
            class="theme-toggle"
            [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            @if (themeService.isDark()) {
              <!-- Sun icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            } @else {
              <!-- Moon icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
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

  ngAfterViewInit() {
    // gh-button resolves its fetch outside Angular's zone; trigger CD after it settles
    setTimeout(() => this.cdr.markForCheck(), 500);
  }
}
