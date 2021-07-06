import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@sandbox/app-routing.module';
import { AppComponent } from '@sandbox/app.component';
import { HomeDashboardModule } from '@sandbox/libs/home-dashboard/home-dashbord.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HomeDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
