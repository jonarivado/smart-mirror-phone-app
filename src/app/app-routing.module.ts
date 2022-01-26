import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSettingsComponent } from './components/component-settings/weather-settings/weather-settings.component';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'weathersettings', component: WeatherSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
