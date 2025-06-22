import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ this is required for *ngIf, *ngFor, etc.

import {
  HlmAvatarComponent,
  HlmAvatarImageDirective,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/helm/avatar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
