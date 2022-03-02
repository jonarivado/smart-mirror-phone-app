import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SettingsComponent } from './components/settings/settings.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'selector/:position', component: ComponentSelectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
