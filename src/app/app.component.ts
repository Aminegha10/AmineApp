import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { LeftSideBarsComponent } from './left-side-bars/side-bars.component';
import { RightSideBarsComponent } from './right-side-bars/right-side-bars.component';
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    LeftSideBarsComponent,
    RightSideBarsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AmineApp';
}
