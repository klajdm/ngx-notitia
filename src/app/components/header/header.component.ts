import { Component, ChangeDetectorRef, inject, AfterViewInit } from '@angular/core';
import { GhButtonModule } from '@ctrl/ngx-github-buttons';

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
        <div class="flex items-center space-x-6">
          <a
            href="https://github.com/klajdm/ngx-notitia/discussions"
            target="_blank"
            class="text-gray-300 hover:text-white text-sm font-medium flex items-center transition-colors"
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
            class="text-gray-300 hover:text-white text-sm font-medium flex items-center transition-colors"
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
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    // gh-button resolves its fetch outside Angular's zone; trigger CD after it settles
    setTimeout(() => this.cdr.markForCheck(), 500);
  }
}
