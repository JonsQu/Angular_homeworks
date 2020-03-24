import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light',
  template: `<img src="{{path}}" (click)="toggleLights()" width="40" alt=""/>`
})
export class LightComponent implements OnInit {
  @Input() isOn : boolean;
  @Input() id : number;
  path : string;
  constructor() {
    
  }
  @Output() lightBulbClicked : EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.isOn);
    
  }
  toggleLights(){
    /*if(!this.isOn){
      this.isOn = true;
      this.path = 'assets/on.png';
    }else{
      this.isOn = false;
      this.path = 'assets/off.png';
    }*/
    this.lightBulbClicked.emit(this.id);
  }
  ngOnChanges(){
    if(this.isOn){
      console.log(this.isOn);
      this.path = 'assets/on.png';
    }else{
      console.log(this.isOn);
      this.path = 'assets/off.png';
    }
    console.log(this.path);
    console.log('OnChanges');
    
  }
}
