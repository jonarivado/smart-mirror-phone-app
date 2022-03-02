import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClockComponent } from './components/widgets/clock/clock.component';
import { WeatherComponent } from './components/widgets/weather/weather.component';
import { SbbComponent } from './components/widgets/sbb/sbb.component';

import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { MemeComponent } from './components/widgets/meme/meme.component';


import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    ClockComponent,
    WeatherComponent,
    SbbComponent,
    ComponentSelectorComponent,
    MemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    provideFirebaseApp(() => initializeApp(environment.firebase)),$provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),    
    HttpClientModule
=======
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
>>>>>>> detached
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
