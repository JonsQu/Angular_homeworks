import { Component } from '@angular/core';
import { LocationService } from './locations/location.service';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `<app-locations></app-locations>`
})
export class AppComponent {
  title = 'http-stuff';
  jsonObject : Object;
  constructor( private locationService : LocationService){
    
  }
}
