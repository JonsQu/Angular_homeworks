import { Component, OnInit, OnChanges, Input } from '@angular/core';
import Location from '../Location'

@Component({
  selector: 'app-location',
  template: `<tr>
              <td *ngFor="let item of loc">{{item}}
              </td>
            </tr>`
})
export class LocationComponent implements OnInit {
  @Input() id : number;
  @Input() latitude : number;
  @Input() longitude : number;
  @Input() loc : Location;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log(`${this.loc}`);
  }

}
