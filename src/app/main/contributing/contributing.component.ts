import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LucideBug,
  LucideLightbulb,
  LucideFileText,
  LucideWrench,
  LucideTrophy,
  LucideStar,
  LucideMessageCircle,
  LucideBookOpen,
  LucideCheck,
} from '@lucide/angular';

@Component({
  selector: 'app-contributing',
  imports: [
    RouterModule,
    LucideBug,
    LucideLightbulb,
    LucideFileText,
    LucideWrench,
    LucideTrophy,
    LucideStar,
    LucideMessageCircle,
    LucideBookOpen,
    LucideCheck,
  ],
  templateUrl: './contributing.component.html',
})
export class ContributingComponent {}
