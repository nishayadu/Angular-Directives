import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { MouseEventDirective } from './mouse-event.directive';
import { InputdirectiveDirective } from './inputdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MouseEventDirective,
    InputdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
