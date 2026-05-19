import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(true);

  constructor() {
    const stored = localStorage.getItem('theme');
    const dark = stored
      ? stored === 'dark'
      : !window.matchMedia('(prefers-color-scheme: light)').matches;
    this.isDark.set(dark);
    this.apply(dark);
  }

  toggle() {
    const next = !this.isDark();
    this.isDark.set(next);
    this.apply(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  private apply(dark: boolean) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}
