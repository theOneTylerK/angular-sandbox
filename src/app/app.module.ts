import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@sandbox/app-routing.module';
import { AppComponent } from '@sandbox/app.component';
import { GlobalModule } from '@sandbox/libs/global/global.module';
import { HomeDashboardModule } from '@sandbox/libs/home-dashboard/home-dashbord.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HomeDashboardModule,
    GlobalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
