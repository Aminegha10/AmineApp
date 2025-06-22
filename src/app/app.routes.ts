import { Routes } from '@angular/router';
import { NoFoundComponent } from './no-found-component/no-found-component.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification-component/notification-component.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Notification', component: NotificationComponent },
  { path: '**', component: NoFoundComponent },
];
