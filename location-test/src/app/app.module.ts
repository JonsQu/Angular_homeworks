import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LocationtableComponent } from './locationtable/locationtable.component';
import { LocationService } from './locationtable/location.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationtableComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }