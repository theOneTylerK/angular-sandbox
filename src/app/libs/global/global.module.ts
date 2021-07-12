import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "@sandbox/app-routing.module"
import { TakHeaderComponent } from "@sandbox/libs/global/components/header/header.component"
import { HighlightDirective } from "@sandbox/libs/global/directives/attribute/highlight.directive"
import { TakMarginBottomDirective, 
         TakMarginDirective, 
         TakMarginLeftDirective, 
         TakMarginRightDirective, 
         TakMarginSidesDirective, 
         TakMarginTopBottomDirective, 
         TakMarginTopDirective 
        } from "@sandbox/libs/global/directives/attribute/margins.directive"
import { TakUnlessDirective } from "@sandbox/libs/global/directives/structural/unless.directive"

const components = [TakHeaderComponent]

const directives = [
  HighlightDirective, 
  TakMarginDirective, 
  TakMarginBottomDirective, 
  TakMarginLeftDirective, 
  TakMarginRightDirective, 
  TakMarginTopDirective,
  TakMarginSidesDirective,
  TakMarginTopBottomDirective,
  TakUnlessDirective
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [...components, ...directives],
  exports: [...components, ...directives]
})
export class GlobalModule { } 