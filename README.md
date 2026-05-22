<div align="center">
  <img src="https://raw.githubusercontent.com/klajdm/ngx-notitia/main/public/logo.png" width="120" height="120" alt="Angular Notitia">
  <br>
  <h1>Angular Notitia</h1>
  <p><strong>Easy, flexible toast notifications for Angular 17 - 21. Forked from ngx-toastr and modernized with standalone components, Angular signals, and new features like swipe-to-dismiss, per-toast color scheme control, and full glassmorphism customization.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/ngx-notitia"><img src="https://img.shields.io/npm/v/ngx-notitia.svg?style=flat-square" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/ngx-notitia"><img src="https://img.shields.io/npm/dm/ngx-notitia.svg?style=flat-square" alt="npm downloads"></a>
    <a href="https://angular.io"><img src="https://img.shields.io/badge/Angular-17--21-green.svg" alt="Angular 17-21"></a>
    <a href="https://github.com/klajdm/ngx-notitia/stargazers"><img src="https://img.shields.io/github/stars/klajdm/ngx-notitia?style=flat-square" alt="GitHub stars"></a>
  </p>
</div>

> **Note:** This repository is a fork of [ngx-toastr](https://github.com/scttcper/ngx-toastr). It builds upon the original project to provide additional features, fixes, and modernizations for Angular 17 - 21.

---

<a href="https://ngx-notitia.vercel.app"><strong>Demo Website</strong></a>

## Features

- Toast Component Injection without being passed `ViewContainerRef`
- No use of `*ngFor`. Fewer dirty checks and higher performance
- No use of `@angular/animations`
- AoT compilation and lazy loading compatible
- Component inheritance for custom toasts
- Swipe-to-dismiss gesture support on mobile
- Dark / light / auto color scheme support
- Output toasts to an optional target directive
- **Full glassmorphism control**: configure backdrop `blur` and `backgroundOpacity`

## Dependencies

| ngx-notitia | Angular     |
| ----------- | ----------- |
| 1.x         | 17.x - 21.x |

## Install

```bash
npm install ngx-notitia --save
```

## Setup

**step 1:** add css

- copy [toast css](/src/lib/toastr.css) to your project.
- If you are using sass you can import the css.

```scss
@import 'ngx-notitia/toastr';
```

- If you are using angular-cli you can add it to your angular.json

```ts
"styles": [
  "styles.scss",
  "node_modules/ngx-notitia/toastr.css"
]
```

**step 2:** add `ToastrModule` to app `NgModule`, or `provideToastr` to providers.

- Module based

```typescript
import { ToastrModule } from 'ngx-notitia';

@NgModule({
  imports: [
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

- Standalone

```typescript
import { AppComponent } from './src/app.component';
import { provideToastr } from 'ngx-notitia';

bootstrapApplication(AppComponent, {
  providers: [
    provideToastr(), // Toastr providers
  ]
});
```

## Use

```typescript
import { ToastrService } from 'ngx-notitia';
import { inject } from '@angular/core';

@Component({...})
export class YourComponent {
  toastr = inject(ToastrService);

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
```

## Options

There are **individual options** and **global options**.

### Individual Options

Passed to `ToastrService.success/error/warning/info/show()`

| Option            | Type                                            | Default           | Description                                                                                                                                   |
| ----------------- | ----------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| toastComponent    | Component                                       | Toast             | Angular component that will be used                                                                                                           |
| closeButton       | boolean                                         | false             | Show close button                                                                                                                             |
| timeOut           | number                                          | 5000              | Time to live in milliseconds                                                                                                                  |
| extendedTimeOut   | number                                          | 1000              | Time to close after a user hovers over toast                                                                                                  |
| disableTimeOut    | `boolean \| 'timeOut' \| 'extendedTimeOut'`     | false             | Disable both timeOut and extendedTimeOut when set to `true`. Allows specifying which timeOut to disable: `timeOut` or `extendedTimeOut`       |
| easing            | string                                          | 'ease-in'         | Toast component easing                                                                                                                        |
| easeTime          | string \| number                                | 300               | Time spent easing                                                                                                                             |
| enableHtml        | boolean                                         | false             | Allow html in message                                                                                                                         |
| newestOnTop       | boolean                                         | true              | New toast placement                                                                                                                           |
| progressBar       | boolean                                         | false             | Show progress bar                                                                                                                             |
| progressAnimation | `'decreasing' \| 'increasing'`                  | 'decreasing'      | Changes the animation of the progress bar                                                                                                     |
| toastClass        | string                                          | 'ngx-notitia'     | CSS class(es) for toast                                                                                                                       |
| positionClass     | string                                          | 'toast-top-right' | CSS class(es) for toast container                                                                                                             |
| titleClass        | string                                          | 'toast-title'     | CSS class(es) for inside toast on title                                                                                                       |
| messageClass      | string                                          | 'toast-message'   | CSS class(es) for inside toast on message                                                                                                     |
| tapToDismiss      | boolean                                         | true              | Close on click                                                                                                                                |
| showBorder        | boolean                                         | true              | Show or hide the toast border                                                                                                                 |
| colorScheme       | `'auto' \| 'light' \| 'dark'`                   | 'auto'            | Force a color scheme. `'auto'` follows the page theme, `'light'` or `'dark'` override it                                                     |
| blur              | number                                          | 8                 | Backdrop blur in px. 0 = clear glass, higher values increase the frosted effect                                                               |
| backgroundOpacity | number                                          | 1                 | Glass background opacity from 0 (fully transparent) to 1 (fully frosted). Text and icons remain fully opaque.                                |
| payload           | unknown                                         | undefined         | Custom data passed through to a custom toast component                                                                                        |
| onActivateTick    | boolean                                         | false             | Fires `changeDetectorRef.detectChanges()` when activated. Helps show toast from asynchronous events outside of Angular's change detection    |

#### Setting Individual Options

`success`, `error`, `info`, `warning` take `(message, title, ToastConfig)` - pass an options object to replace any default option.

```typescript
this.toastrService.error('everything is broken', 'Major Error', {
  timeOut: 3000,
});
```

### Global Options

All [individual options](#individual-options) can be overridden in the global options to affect all toasts. In addition, global options include:

| Option                  | Type                       | Default                            | Description                                                                                                   |
| ----------------------- | -------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| maxOpened               | number                     | 0                                  | Max toasts opened. Toasts will be queued. 0 is unlimited                                                      |
| autoDismiss             | boolean                    | false                              | Dismiss current toast when max is reached                                                                     |
| iconClasses             | object                     | [see below](#iconclasses-defaults) | Classes used on toastr service methods                                                                        |
| preventDuplicates       | boolean                    | false                              | Block duplicate messages                                                                                      |
| countDuplicates         | boolean                    | false                              | Displays a duplicates counter (preventDuplicates must be true). Toast must have a title and duplicate message |
| resetTimeoutOnDuplicate | boolean                    | false                              | Reset toast timeout on duplicate (preventDuplicates must be true)                                             |
| includeTitleDuplicates  | boolean                    | false                              | Include the title of a toast when checking for duplicates (by default only message is compared)               |

##### iconClasses defaults

```typescript
iconClasses = {
  error: 'toast-error',
  info: 'toast-info',
  success: 'toast-success',
  warning: 'toast-warning',
};
```

#### Setting Global Options

Pass values to `ToastrModule.forRoot()` or `provideToastr()` to set global options.

- Module based

```typescript
imports: [
  ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),
],
```

- Standalone

```typescript
import { AppComponent } from './src/app.component';
import { provideToastr } from 'ngx-notitia';

bootstrapApplication(AppComponent, {
  providers: [
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ]
});
```

### Toastr Service methods return:

```typescript
export interface ActiveToast {
  /** Your Toast ID. Use this to close it individually */
  toastId: number;
  /** the title of your toast. Stored to prevent duplicates if includeTitleDuplicates set */
  title: string;
  /** the message of your toast. Stored to prevent duplicates */
  message: string;
  /** a reference to the component see portal.ts */
  portal: ComponentRef<any>;
  /** a reference to your toast */
  toastRef: ToastRef<any>;
  /** triggered when toast is active */
  onShown: Observable<any>;
  /** triggered when toast is destroyed */
  onHidden: Observable<any>;
  /** triggered on toast click */
  onTap: Observable<any>;
  /** available for your use in custom toast */
  onAction: Observable<any>;
}
```

### Put toasts in your own container

Put toasts in a specific div inside your application. This should probably be somewhere that doesn't get deleted. Add `ToastContainerDirective` to the NgModule where you need the directive available. Make sure that your container has an `aria-live="polite"` attribute so that any time a toast is injected into the container it is announced by screen readers.

```typescript
import { NgModule } from '@angular/core';
import { ToastrModule, ToastContainerDirective } from 'ngx-notitia';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Add a div with `toastContainer` directive on it.

```typescript
import { Component, OnInit, viewChild, inject } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-notitia';

@Component({
  selector: 'app-root',
  template: `
    <h1><a (click)="onClick()">Click</a></h1>
    <div aria-live="polite" toastContainer></div>
  `,
})
export class AppComponent implements OnInit {
  toastContainer = viewChild(ToastContainerDirective, { static: true });
  toastrService = inject(ToastrService);

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  onClick() {
    this.toastrService.success('in div');
  }
}
```

## Functions

##### Clear

Remove all or a single toast by optional id

```ts
toastrService.clear(toastId?: number);
```

##### Remove

Remove and destroy a single toast by id

```ts
toastrService.remove(toastId: number);
```

## Setup Without Animations

If you do not want animations, override the default toast component in the global config to use `ToastNoAnimation`.

```typescript
import { provideToastr, ToastNoAnimation } from 'ngx-notitia';

bootstrapApplication(AppComponent, {
  providers: [
    provideToastr({
      toastComponent: ToastNoAnimation,
    }),
  ]
});
```

Or with `ToastrModule`:

```typescript
import { ToastrModule, ToastNoAnimation } from 'ngx-notitia';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
  ],
})
class AppModule {}
```

## Using A Custom Toast

Create your toast component extending `Toast` - see the demo's pink toast for an example:
https://github.com/klajdm/ngx-notitia/blob/main/src/app/pink.toast.ts

```typescript
import { ToastrModule } from 'ngx-notitia';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      toastComponent: YourToastComponent, // added custom toast!
    }),
  ],
  bootstrap: [App],
  declarations: [App, YourToastComponent], // add!
})
class AppModule {}
```

## FAQ

1.  ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked\
    When opening a toast inside an angular lifecycle wrap it in setTimeout

```typescript
ngOnInit() {
    setTimeout(() => this.toastr.success('sup'))
}
```

2.  Change default icons (check, warning sign, etc)\
    Overwrite the css background-image: https://github.com/klajdm/ngx-notitia/blob/main/src/lib/toastr.css.
3.  How do I use this in an ErrorHandler?\
    See: https://github.com/klajdm/ngx-notitia/issues/179.
4.  How can I translate messages?\
    See: https://github.com/klajdm/ngx-notitia/issues/201.
5.  How to handle toastr click/tap action?
    ```ts
    showToaster() {
      this.toastr.success('Hello world!', 'Toastr fun!')
        .onTap
        .pipe(take(1))
        .subscribe(() => this.toasterClickedHandler());
    }

    toasterClickedHandler() {
      console.log('Toastr clicked');
    }
    ```
6. How to customize styling without overriding defaults?\
    Add multiple CSS classes separated by a space:
    ```ts
    toastClass: 'yourclass ngx-notitia'
    ```
    See: https://github.com/klajdm/ngx-notitia/issues/594.


## Previous Works

[WhatsApp Web Privacy Mode](https://wsp-web-privacy.com/) - Intelligently blur your WhatsApp Web chat list and messages during screen sharing.

[ngx-chronica](https://github.com/klajdm/ngx-chronica) - A Complete Angular Date & Time Component Library

## License

MIT

---

> GitHub [@klajdm](https://github.com/klajdm)
