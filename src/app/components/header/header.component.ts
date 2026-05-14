import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
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
            class="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
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
            class="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
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
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent {}
