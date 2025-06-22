import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ this is required for *ngIf, *ngFor, etc.
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
  HlmCardDirective,
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/helm/card';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import {
  HlmAvatarComponent,
  HlmAvatarImageDirective,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/helm/avatar';
import { HlmSeparatorDirective } from '@spartan-ng/helm/separator';

import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    // Spartan UI Directives and Components
    HlmButtonDirective,
    HlmCardDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmInputDirective,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    HlmSeparatorDirective,
    HlmTabsContentDirective,
    HlmTabsTriggerDirective,
  ],
  templateUrl: './settings.component.html',
  styles: ``,
})
export class SettingsComponent {}
