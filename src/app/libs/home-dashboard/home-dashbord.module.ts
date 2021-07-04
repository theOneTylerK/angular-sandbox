import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@sandbox/app-routing.module';
import { HomeDashboardHeaderComponent } from '@sandbox/libs/home-dashboard/src/components/home-dashboard-header/home-dashboard-header.component';
import { HomeDashboardComponent } from '@sandbox/libs/home-dashboard/src/containers/home-dashboard.component';


const components = [HomeDashboardComponent, HomeDashboardHeaderComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeDashboardModule { }