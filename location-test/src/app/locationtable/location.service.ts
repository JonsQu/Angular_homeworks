import { Injectable } from '@angular/core';
import Location from '../location';
@Injectable()
export class LocationService {
    private static AMOUNT_OF_LOCATIONS = 5;
    locations: Location[] = [];
    constructor(){
        this.generateRandomLocations();
    }
  fetch() : Location[] {
      // return an array of location objects
      return this.locations;
  }
  generateRandomLocations(): void {
    for (let i = 0; i < LocationService.AMOUNT_OF_LOCATIONS; i++) {
      this.locations.push(new Location());
    }
  }
}