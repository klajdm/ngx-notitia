# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-05-23

### Added

- **`blur`** option (`number`, default `8`): controls the backdrop-filter blur intensity in px, per toast or globally. Set to `0` for clear glass, increase for a more frosted effect.
- **`backgroundOpacity`** option (`number`, default `1`): controls the glass background color opacity per toast or globally. At `0` the background is fully transparent; at `1` it uses the full themed color. Text, icons, and the close button remain fully opaque at all values.

These two options give developers complete control over the glassmorphism aesthetic - a differentiating feature not available in the original `ngx-toastr`.

```typescript
// Clear glass with no blur
this.toastr.success('Saved!', 'Success', { blur: 0, backgroundOpacity: 0 });

// Heavy frosted glass
this.toastr.info('Loading…', '', { blur: 20, backgroundOpacity: 1 });
```

## [1.0.3] - 2026-05-21

### Fixed

- **Exit animation missing**: `state` was set to `'removed'` immediately on dismiss, causing `display: none` to be applied before the exit animation could play. The state update is now deferred until after the animation completes, and `toast-in` is removed before `toast-out` is applied to prevent class conflicts.

## [1.0.2] - 2026-05-21

### Fixed

- **`colorScheme` override ignored when page uses dark theme**: `colorScheme: 'light'` had no effect on apps with `[data-theme="dark"]`, a `.dark` class, or a dark system `prefers-color-scheme`. The dark theme CSS selectors now include `:not([data-color-scheme])` so explicit per-toast color scheme always wins.
- **Enter animation missing**: The `toast-in` CSS class was never applied on activation due to an invalid `animate.enter` host binding. The class is now added in `ngAfterViewInit`, restoring the scale-in enter animation.
- **Non-passive touch event warning on desktop**: `touchmove` listener with `{ passive: false }` was registered unconditionally, causing browser console violations on non-touch devices. It is now only registered when the device supports touch (`'ontouchstart' in window || navigator.maxTouchPoints > 0`).

## [1.0.1] - 2026-05-21

### Fixed

- **Peer dependency range too narrow**: `@angular/common` and `@angular/core` were pinned to `^21.0.0`, preventing installation on Angular 17-20 projects. Widened to `>=17.0.0` (the true minimum based on `@if`/`@let` template syntax and `linkedSignal()` usage).
- **`rxjs` peer dependency too narrow**: Changed from `^7.8.2` to `^7.0.0` to accept any rxjs 7.x release.

## [1.0.0] - 2025-05-01

### Added

- **ToastrService**: `success()`, `error()`, `info()`, `warning()`, and `show()` methods for triggering toast notifications
- **ToastrService**: `clear(toastId?)` to gracefully remove all or a specific toast
- **ToastrService**: `remove(toastId)` to immediately destroy a specific toast
- **Toast component**: Animated toast with configurable CSS easing and duration
- **ToastNoAnimation component**: Base toast variant with no enter/exit animations for performance-sensitive use cases
- **ToastContainerDirective**: Place toasts inside any element in your app with `[toastContainer]`
- **provideToastr()**: Standalone provider function for Angular's `bootstrapApplication` setup
- **ToastrModule.forRoot()**: NgModule-based setup with optional global config
- **Progress bar**: Visual timeout indicator with `increasing` or `decreasing` animation modes
- **Duplicate prevention**: `preventDuplicates`, `countDuplicates`, `resetTimeoutOnDuplicate`, and `includeTitleDuplicates` global options
- **Toast queue**: `maxOpened` and `autoDismiss` options for managing concurrent toasts
- **Swipe-to-dismiss**: Touch gesture support (80 px threshold) for mobile devices
- **`showBorder`** option (`boolean`, default `true`): Toggle the toast border per-toast or globally
- **`colorScheme`** option (`'auto' | 'light' | 'dark'`, default `'auto'`): Force a color scheme per-toast or globally, independent of the page theme
- **`payload`** option (generic `ConfigPayload`): Pass arbitrary data to custom toast components
- **`disableTimeOut`** option: Accepts `true`, `'timeOut'`, or `'extendedTimeOut'` to selectively disable timeout behavior
- **`onActivateTick`** option: Triggers `ChangeDetectorRef.detectChanges()` on activation for toasts opened outside Angular's zone
- **Observable events** on `ActiveToast`: `onShown`, `onHidden`, `onTap`, `onAction`
- **Custom toast components**: Extend `Toast` or `ToastNoAnimation` to create fully custom toast UI
- **Angular 17+ support**: Built with standalone components, Angular signals, and zone-aware `TimeoutsService`
- **Dark mode support**: Auto-detects system/page color scheme via `colorScheme: 'auto'`
- **Accessible markup**: ARIA roles and labels on toast containers and messages
- **Portal system**: Decoupled `Overlay` / `OverlayRef` / `ComponentPortal` for component attachment without `ViewContainerRef`
