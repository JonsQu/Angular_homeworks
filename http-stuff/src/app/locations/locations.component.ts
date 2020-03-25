import { Component, OnInit, Input } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';
import { SelectControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  @Input() latitude: number;
  @Input() longitude: number;
  constructor(private locationService : LocationService) { }

  ngOnInit(): void {
    this.locationService.fetch(result => {
      this.locations = result;
    });
  }
  add() {
    const loc: Location = {id: 0,latitude: this.latitude, longitude: this.longitude};
    this.locationService.addData(loc, result => {
      console.log(result);
      this.locations.push(result);
    });
    this.latitude = undefined;
    this.longitude = undefined;
  }
  delete(id: number){
    this.locationService.deleteData(id, result => {
      console.log(result.status);
      if(result.status === 200){
        this.locations = this.locations.filter(item => item.id !== id);
      }
    });
  }
}

