import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@sandbox/app-routing.module';
import { HighlightDirective } from '@sandbox/directives/highlight.directive';
import { HomeDashboardHeaderComponent } from '@sandbox/libs/home-dashboard/src/components/home-dashboard-header/home-dashboard-header.component';
import { HomeDashboardComponent } from '@sandbox/libs/home-dashboard/src/containers/home-dashboard.component';


const components = [HomeDashboardComponent, HomeDashboardHeaderComponent]

const directives = [HighlightDirective]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [...components, ...directives],
  exports: [...components]
})
export class HomeDashboardModule { }