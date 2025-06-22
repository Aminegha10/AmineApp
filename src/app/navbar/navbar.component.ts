import { Component } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { Router } from '@angular/router';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/helm/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmSubMenuComponent,
    BrnMenuTriggerDirective,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
