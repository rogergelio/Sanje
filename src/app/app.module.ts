import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { HowComponent } from './how/how.component';
import { ContactComponent } from './contact/contact.component';

import { LoggingService } from 'src/services/LoggingService';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LandingComponent,
    AboutComponent,
    HowComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
