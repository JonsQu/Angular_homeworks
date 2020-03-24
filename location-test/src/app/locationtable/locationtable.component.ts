import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import Location from '../location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-locationtable',
  templateUrl: 'locationtable.component.html',
  styleUrls: ['locationtable.component.css']
})
export class LocationtableComponent {
  

  locations: Location[] = [];
  @Input() latitude: number;
  @Input() longitude: number;

  constructor(locationService : LocationService) {
    this.locations = locationService.fetch();
  }

  add() {
    try {
      const loc: Location = new Location();
      loc.latitude = this.latitude;
      loc.longitude = this.longitude;
      this.locations.push(loc);
    } catch (exception) {
      alert('Invalid values given');
    }
    this.latitude = undefined;
    this.longitude = undefined;
  }
  

  delete(location: Location) {
    let removalIndex = -1;
    for (let index = 0; index < this.locations.length; index++) {
      if (this.locations[index].id === location.id) {
        removalIndex = index;
      }
    }
    if (removalIndex !== -1) {
      this.locations.splice(removalIndex, 1);
    }
  }

}
