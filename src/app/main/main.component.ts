import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './main.component.html',
})
export class MainComponent {}
