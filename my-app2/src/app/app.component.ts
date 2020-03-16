import { Component } from '@angular/core';
import Location from './Location';

@Component({
  selector: 'app-root',
  template: `<table>
              <tr>
                <th>#</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
              <app-location *ngFor="let loc of locs" [loc]="loc">
              </app-location>
              </table>
              <button (click)="addLocation()">Add location</button>`
})
export class AppComponent {
  locs : Location[] = [{"id": 1, "latitude": 10, "longitude": 20},
                    {"id": 2, "latitude": 100, "longitude": 50}];
  title = 'my-app2';
  addLocation() : void{
    this.locs.push({"id": this.myRandom(100, 1), 
    "latitude": this.myRandom(255, 1), "longitude": this.myRandom(200, 1)})
  }
  myRandom(max : number, min : number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
