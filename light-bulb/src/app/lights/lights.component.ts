import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lights',
  template: `<app-light (lightBulbClicked)="clicked1($event)" [isOn]="toggles[0]"></app-light>
            <app-light (lightBulbClicked)="clicked2($event)" [isOn]="toggles[1]"></app-light>
            <app-light (lightBulbClicked)="clicked3($event)" [isOn]="toggles[2]"></app-light>` 
})
export class LightsComponent implements OnInit {
  toggles : boolean[] = [false, true, false];
  isAllOn : boolean;
  @Output() lightsSituation : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clicked1(event){
    this.toggles[0] = event;
    this.isAllLightsOn();
    //console.log(`clicked1 ${this.toggles[0]}`);
  }
  clicked2(event){
    this.toggles[1] = event;
    this.isAllLightsOn();
    //console.log(`clicked2 ${this.toggles[1]}`);
  }
  clicked3(event){
    this.toggles[2] = event;
    this.isAllLightsOn();
    //console.log(`clicked3 ${this.toggles[2]}`);
  }
  isAllLightsOn(){
    console.log(this.toggles);
    this.isAllOn = true;
    for(let i of this.toggles){
      console.log(i);
      if(i === false){
        this.isAllOn = false;
      }
    }
    this.lightsSituation.emit(this.isAllOn);
  }

}
