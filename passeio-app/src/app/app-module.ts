import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing-module';
import {App} from './app';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { Lugar } from './lugares/lugar/lugar';
import {ReactiveFormsModule} from '@angular/forms';
import { LandingPage } from './landing-page/landing-page';

@NgModule({
  declarations: [
    App,
    Lugar,
    LandingPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule {
}
