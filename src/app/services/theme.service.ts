import { ApplicationRef, inject, Injectable, signal } from '@angular/core';

// Solid edge colors of the --bg-page gradient (theme-color can't be a gradient)
const DARK_COLOR = '#0f172a';
const LIGHT_COLOR = '#f8fafc';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private appRef = inject(ApplicationRef);

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
    localStorage.setItem('theme', next ? 'dark' : 'light');

    if (!document.startViewTransition) {
      this.isDark.set(next);
      this.apply(next);
      return;
    }

    document.startViewTransition(() => {
      this.isDark.set(next);
      this.apply(next);
      this.appRef.tick();
    });
  }

  private apply(dark: boolean) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

    // Both tags get the same color so the in-app toggle wins over the OS preference.
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach(meta => meta.setAttribute('content', dark ? DARK_COLOR : LIGHT_COLOR));
  }
}
