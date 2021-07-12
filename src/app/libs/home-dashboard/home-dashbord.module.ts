import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@sandbox/app-routing.module';
import { GlobalModule } from '@sandbox/libs/global/global.module';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeDashboardComponent } from '@sandbox/libs/home-dashboard/src/containers/home-dashboard.component';


const components = [HomeDashboardComponent]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [...components],
  exports: [...components]
})
export class HomeDashboardModule { }