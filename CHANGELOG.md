# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- **Angular 21+ support**: Built with standalone components, Angular signals, and zone-aware `TimeoutsService`
- **Dark mode support**: Auto-detects system/page color scheme via `colorScheme: 'auto'`
- **Accessible markup**: ARIA roles and labels on toast containers and messages
- **Portal system**: Decoupled `Overlay` / `OverlayRef` / `ComponentPortal` for component attachment without `ViewContainerRef`
