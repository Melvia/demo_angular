import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BoldDirective } from './bold.directive';
import { WhileDirective } from './while.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    BoldDirective,
    WhileDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
