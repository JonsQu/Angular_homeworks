import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lights',
  template: `<app-light *ngFor="let boVal of toggles; let i = index"
            (lightBulbClicked)="clicked($event)" [isOn]="boVal" [id]="i"></app-light>` 
})
export class LightsComponent implements OnInit {
  toggles : boolean[] = [false, true, false, true, false, true];
  isAllOn : boolean;
  @Output() lightsSituation : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  clicked(id : number){
    this.toggles[id] = !this.toggles[id];
    this.isAllOn = true;
    for(let i of this.toggles){
      console.log(i);
      if(i === false){
        this.isAllOn = false;
      }
    }
    this.lightsSituation.emit(this.isAllOn);
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
