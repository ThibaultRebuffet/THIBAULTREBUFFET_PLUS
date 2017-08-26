import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicBackgroundComponent } from './components/dynamic-background/dynamic-background.component';
import { UiBehaviourService } from './services/ui-behaviour.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UiBehaviourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
