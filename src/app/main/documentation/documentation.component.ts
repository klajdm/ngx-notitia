import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucidePackage,
  LucideZap,
  LucideSettings,
  LucideCode,
  LucideCheck,
  LucideLayers,
  LucideBell,
} from '@lucide/angular';

interface SetupStep {
  step: number;
  title: string;
  description: string;
  code: string;
  language: string;
}

interface FeatureCard {
  title: string;
  description: string;
  items: string[];
}

interface OptionRow {
  option: string;
  type: string;
  default: string;
  description: string;
}

interface MethodRow {
  method: string;
  signature: string;
  description: string;
}

interface ActiveToastProp {
  property: string;
  type: string;
  description: string;
}

interface TypeDefinition {
  name: string;
  code: string;
}

@Component({
  selector: 'app-documentation',
  imports: [
    CommonModule,
    LucidePackage,
    LucideZap,
    LucideSettings,
    LucideCode,
    LucideCheck,
    LucideLayers,
    LucideBell,
  ],
  templateUrl: './documentation.component.html',
})
export class DocumentationComponent {
  setupSteps: SetupStep[] = [
    {
      step: 1,
      title: 'Install',
      description: 'Install ngx-notitia from npm.',
      code: `npm install ngx-notitia --save`,
      language: 'bash',
    },
    {
      step: 2,
      title: 'Add CSS',
      description: 'Import the toast stylesheet. Pick the approach that fits your project.',
      code: `/* SCSS / Angular styles array */
@import 'ngx-notitia/toastr';

/* angular.json */
"styles": [
  "styles.scss",
  "node_modules/ngx-notitia/toastr.css"
]`,
      language: 'scss',
    },
    {
      step: 3,
      title: 'Add Provider',
      description: 'Register the toastr providers in your app.',
      code: `// Standalone (recommended)
import { provideToastr } from 'ngx-notitia';

bootstrapApplication(AppComponent, {
  providers: [
    provideToastr()
  ]
});

// NgModule
import { ToastrModule } from 'ngx-notitia';

@NgModule({
  imports: [ToastrModule.forRoot()]
})
class AppModule {}`,
      language: 'typescript',
    },
    {
      step: 4,
      title: 'Show Toasts',
      description: 'Inject ToastrService and call any of the toast methods.',
      code: `import { ToastrService } from 'ngx-notitia';
import { inject, Component } from '@angular/core';

@Component({ ... })
export class AppComponent {
  toastr = inject(ToastrService);

  showSuccess() { this.toastr.success('Saved!', 'Success'); }
  showError()   { this.toastr.error('Something went wrong', 'Error'); }
  showInfo()    { this.toastr.info('Here is some info'); }
  showWarning() { this.toastr.warning('Heads up!', 'Warning'); }
}`,
      language: 'typescript',
    },
  ];

  coreFeatures: FeatureCard[] = [
    {
      title: 'Four Toast Types',
      description:
        'Success, error, info, and warning toasts - each with a distinct style and icon.',
      items: ['success()', 'error()', 'info()', 'warning()', 'show() for custom types'],
    },
    {
      title: 'Progress Bar & Timing',
      description: 'Visual countdown bar with configurable timeout and animation direction.',
      items: [
        'progressBar option',
        'progressAnimation: increasing | decreasing',
        'timeOut (ms)',
        'extendedTimeOut on hover',
        'disableTimeOut option',
      ],
    },
    {
      title: 'Duplicate Control',
      description: 'Prevent flooding with intelligent duplicate detection and queue management.',
      items: [
        'preventDuplicates',
        'countDuplicates',
        'resetTimeoutOnDuplicate',
        'includeTitleDuplicates',
        'maxOpened + autoDismiss',
      ],
    },
    {
      title: 'Custom Components',
      description: 'Extend Toast or ToastNoAnimation to render fully custom toast UI.',
      items: [
        'Extend Toast base class',
        'Custom template & styles',
        'payload for arbitrary data',
        'toastComponent option',
        'Access ToastPackage in component',
      ],
    },
    {
      title: 'Mobile & Accessibility',
      description: 'Swipe-to-dismiss on touch devices and ARIA-compliant markup.',
      items: [
        'Swipe-to-dismiss (80 px threshold)',
        'ARIA roles and labels',
        'tapToDismiss on click',
        'Keyboard-accessible close button',
      ],
    },
    {
      title: 'Dark / Light Mode',
      description: 'Per-toast color scheme override independent of the page theme.',
      items: [
        "colorScheme: 'auto'",
        "colorScheme: 'dark'",
        "colorScheme: 'light'",
        'Follows page theme by default',
        'Set globally or per-toast',
      ],
    },
  ];

  serviceMethods: MethodRow[] = [
    {
      method: 'success()',
      signature: 'success(message?, title?, override?): ActiveToast | null',
      description: 'Show a success toast',
    },
    {
      method: 'error()',
      signature: 'error(message?, title?, override?): ActiveToast | null',
      description: 'Show an error toast',
    },
    {
      method: 'info()',
      signature: 'info(message?, title?, override?): ActiveToast | null',
      description: 'Show an info toast',
    },
    {
      method: 'warning()',
      signature: 'warning(message?, title?, override?): ActiveToast | null',
      description: 'Show a warning toast',
    },
    {
      method: 'show()',
      signature: 'show(message?, title?, override?, type?): ActiveToast | null',
      description: 'Show a toast with a custom type string',
    },
    {
      method: 'clear()',
      signature: 'clear(toastId?: number): void',
      description: 'Gracefully close all toasts, or one by ID',
    },
    {
      method: 'remove()',
      signature: 'remove(toastId: number): boolean',
      description: 'Immediately destroy a specific toast by ID',
    },
  ];

  individualOptions: OptionRow[] = [
    {
      option: 'toastComponent',
      type: 'Component',
      default: 'Toast',
      description: 'Angular component used to render the toast',
    },
    {
      option: 'closeButton',
      type: 'boolean',
      default: 'false',
      description: 'Show a close button on the toast',
    },
    {
      option: 'timeOut',
      type: 'number',
      default: '5000',
      description: 'Time to live in milliseconds',
    },
    {
      option: 'extendedTimeOut',
      type: 'number',
      default: '1000',
      description: 'Time before closing after the user stops hovering',
    },
    {
      option: 'disableTimeOut',
      type: "boolean | 'timeOut' | 'extendedTimeOut'",
      default: 'false',
      description: "Disable auto-close. Pass 'timeOut' or 'extendedTimeOut' to disable selectively",
    },
    {
      option: 'progressBar',
      type: 'boolean',
      default: 'false',
      description: 'Show a progress bar indicating remaining time',
    },
    {
      option: 'progressAnimation',
      type: "'decreasing' | 'increasing'",
      default: "'decreasing'",
      description: 'Direction of the progress bar animation',
    },
    {
      option: 'newestOnTop',
      type: 'boolean',
      default: 'true',
      description: 'Stack new toasts on top of existing ones',
    },
    {
      option: 'tapToDismiss',
      type: 'boolean',
      default: 'true',
      description: 'Dismiss the toast on click',
    },
    {
      option: 'enableHtml',
      type: 'boolean',
      default: 'false',
      description: 'Render HTML inside the toast message (use with caution)',
    },
    {
      option: 'showBorder',
      type: 'boolean',
      default: 'true',
      description: 'Show or hide the toast border',
    },
    {
      option: 'colorScheme',
      type: "'auto' | 'light' | 'dark'",
      default: "'auto'",
      description: "Override the color scheme. 'auto' follows the page theme",
    },
    {
      option: 'positionClass',
      type: 'string',
      default: "'toast-top-right'",
      description: 'CSS class controlling toast container position',
    },
    {
      option: 'toastClass',
      type: 'string',
      default: "'ngx-notitia'",
      description: 'CSS class applied to each toast element',
    },
    {
      option: 'titleClass',
      type: 'string',
      default: "'toast-title'",
      description: 'CSS class applied to the toast title',
    },
    {
      option: 'messageClass',
      type: 'string',
      default: "'toast-message'",
      description: 'CSS class applied to the toast message',
    },
    {
      option: 'easing',
      type: 'string',
      default: "'ease-in'",
      description: 'CSS easing function for the toast animation',
    },
    {
      option: 'easeTime',
      type: 'string | number',
      default: '300',
      description: 'Duration of the enter/exit animation in milliseconds',
    },
    {
      option: 'payload',
      type: 'unknown',
      default: 'undefined',
      description: 'Custom data passed to a custom toast component via ToastPackage',
    },
    {
      option: 'onActivateTick',
      type: 'boolean',
      default: 'false',
      description:
        "Trigger changeDetectorRef.detectChanges() on activation (for events outside Angular's zone)",
    },
  ];

  globalOnlyOptions: OptionRow[] = [
    {
      option: 'maxOpened',
      type: 'number',
      default: '0',
      description: 'Max simultaneous toasts. 0 = unlimited. Excess toasts are queued',
    },
    {
      option: 'autoDismiss',
      type: 'boolean',
      default: 'false',
      description: 'When max is reached, dismiss the oldest toast to make room',
    },
    {
      option: 'preventDuplicates',
      type: 'boolean',
      default: 'false',
      description: 'Block toasts with an identical message to one already visible',
    },
    {
      option: 'countDuplicates',
      type: 'boolean',
      default: 'false',
      description: 'Show a counter on the duplicate toast (requires preventDuplicates)',
    },
    {
      option: 'resetTimeoutOnDuplicate',
      type: 'boolean',
      default: 'false',
      description:
        'Reset the timeout when a duplicate would have been shown (requires preventDuplicates)',
    },
    {
      option: 'includeTitleDuplicates',
      type: 'boolean',
      default: 'false',
      description: 'Include the title when checking for duplicates (default compares message only)',
    },
    {
      option: 'iconClasses',
      type: 'object',
      default: '{ error, info, success, warning }',
      description: 'Map of toast type → CSS class used for icons',
    },
  ];

  activeToastProps: ActiveToastProp[] = [
    {
      property: 'toastId',
      type: 'number',
      description: 'Unique ID - use to clear/remove a specific toast',
    },
    { property: 'title', type: 'string', description: 'Title text (used for duplicate checking)' },
    {
      property: 'message',
      type: 'string',
      description: 'Message text (used for duplicate checking)',
    },
    {
      property: 'portal',
      type: 'ComponentRef<C>',
      description: 'Reference to the rendered toast component instance',
    },
    {
      property: 'toastRef',
      type: 'ToastRef<C>',
      description: 'Control reference - call manualClose() to close programmatically',
    },
    {
      property: 'onShown',
      type: 'Observable<void>',
      description: 'Fires when the toast becomes active',
    },
    {
      property: 'onHidden',
      type: 'Observable<void>',
      description: 'Fires when the toast is destroyed',
    },
    {
      property: 'onTap',
      type: 'Observable<void>',
      description: 'Fires when the user clicks the toast',
    },
    {
      property: 'onAction',
      type: 'Observable<unknown>',
      description: 'Available for custom use inside a custom toast component',
    },
  ];

  typeDefinitions: TypeDefinition[] = [
    {
      name: 'GlobalConfig (extends IndividualConfig)',
      code: `<span class="text-purple-400">interface</span> <span class="text-blue-300">GlobalConfig</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">IndividualConfig</span> {
  <span class="text-cyan-300">maxOpened</span>: <span class="text-blue-300">number</span>;
  <span class="text-cyan-300">autoDismiss</span>: <span class="text-blue-300">boolean</span>;
  <span class="text-cyan-300">preventDuplicates</span>: <span class="text-blue-300">boolean</span>;
  <span class="text-cyan-300">countDuplicates</span>: <span class="text-blue-300">boolean</span>;
  <span class="text-cyan-300">resetTimeoutOnDuplicate</span>: <span class="text-blue-300">boolean</span>;
  <span class="text-cyan-300">includeTitleDuplicates</span>: <span class="text-blue-300">boolean</span>;
  <span class="text-cyan-300">iconClasses</span>: <span class="text-blue-300">Partial&lt;ToastrIconClasses&gt;</span>;
}`,
    },
    {
      name: 'ActiveToast<C>',
      code: `<span class="text-purple-400">interface</span> <span class="text-blue-300">ActiveToast</span>&lt;<span class="text-green-400">C</span>&gt; {
  <span class="text-cyan-300">toastId</span>: <span class="text-blue-300">number</span>;
  <span class="text-cyan-300">title</span>: <span class="text-blue-300">string</span>;
  <span class="text-cyan-300">message</span>: <span class="text-blue-300">string</span>;
  <span class="text-cyan-300">portal</span>: <span class="text-blue-300">ComponentRef</span>&lt;<span class="text-green-400">C</span>&gt;;
  <span class="text-cyan-300">toastRef</span>: <span class="text-blue-300">ToastRef</span>&lt;<span class="text-green-400">C</span>&gt;;
  <span class="text-cyan-300">onShown</span>: <span class="text-blue-300">Observable</span>&lt;<span class="text-orange-400">void</span>&gt;;
  <span class="text-cyan-300">onHidden</span>: <span class="text-blue-300">Observable</span>&lt;<span class="text-orange-400">void</span>&gt;;
  <span class="text-cyan-300">onTap</span>: <span class="text-blue-300">Observable</span>&lt;<span class="text-orange-400">void</span>&gt;;
  <span class="text-cyan-300">onAction</span>: <span class="text-blue-300">Observable</span>&lt;<span class="text-orange-400">unknown</span>&gt;;
}`,
    },
    {
      name: 'ProgressAnimationType',
      code: `<span class="text-purple-400">type</span> <span class="text-blue-300">ProgressAnimationType</span> = <span class="text-green-400">'increasing'</span> | <span class="text-green-400">'decreasing'</span>;`,
    },
    {
      name: 'DisableTimeoutType',
      code: `<span class="text-purple-400">type</span> <span class="text-blue-300">DisableTimeoutType</span> =
  | <span class="text-blue-300">boolean</span>
  | <span class="text-green-400">'timeOut'</span>
  | <span class="text-green-400">'extendedTimeOut'</span>;`,
    },
  ];

  customToastCode = `import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-notitia';

@Component({
  selector: '[my-toast-component]',
  template: \`
    <div class="my-toast" (click)="action()">
      <h4>{{ title }}</h4>
      <p [innerHTML]="message"></p>
      <button (click)="remove()">Dismiss</button>
    </div>
  \`,
})
export class MyToastComponent extends Toast {
  // Access custom data passed via the payload option
  get data() { return this.toastPackage.config.payload; }

  action() {
    this.toastPackage.triggerAction('custom-action');
  }
}

// Usage:
toastr.success('Done!', 'Title', {
  toastComponent: MyToastComponent,
  payload: { orderId: 42 },
});`;

  containerCode = `// 1. Import ToastContainerDirective
import { ToastrModule, ToastContainerDirective } from 'ngx-notitia';

@NgModule({
  imports: [
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerDirective,
  ],
})
export class AppModule {}

// 2. Add the directive to a div
@Component({
  template: \`
    <div aria-live="polite" toastContainer></div>
  \`,
})
export class AppComponent implements OnInit {
  toastContainer = viewChild(ToastContainerDirective);
  toastrService = inject(ToastrService);

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
}`;
}
