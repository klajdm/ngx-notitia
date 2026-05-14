import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastNoAnimationModule } from 'ngx-notitia';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToastNoAnimationModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
