import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lights',
  template: `<app-light [isOn]="false"></app-light>
            <app-light [isOn]="true"></app-light>
            <app-light [isOn]="false"></app-light>` 
})
export class LightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
