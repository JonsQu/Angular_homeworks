import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightComponent } from './light/light.component';
import { LightsComponent } from './lights/lights.component';
import { FirstCharUpperCasePipe } from './firstcharuppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    LightsComponent,
    FirstCharUpperCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
