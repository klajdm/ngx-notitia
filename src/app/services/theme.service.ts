import { ApplicationRef, inject, Injectable, signal } from '@angular/core';

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
  }
}
