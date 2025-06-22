import { Component } from '@angular/core';
import { ForYouComponent } from './for-you/for-you.component';
import { FollowingComponent } from './following/following.component';
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-home',
  imports: [
    FollowingComponent,
    ForYouComponent,
    HlmTabsComponent,
    HlmTabsContentDirective,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
