import { Component } from '@angular/core';
import { GhButtonModule } from '@ctrl/ngx-github-buttons';

@Component({
  selector: 'app-header',
  template: `
    <header class="header mt-20 text-center">
      <h1>Angular Notitia</h1>
      <p style="color: #777" class="mb-1 mt-0">Easy Toasts for Angular</p>
      <gh-button user="klajdm" repo="ngx-notitia" [count]="true"></gh-button>
    </header>
  `,
  imports: [GhButtonModule],
})
export class HeaderComponent {}
