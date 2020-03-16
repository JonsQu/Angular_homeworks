import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nameform',
  template: `<form *ngIf='!jussi'>
    <input type="text"
      placeholder="{{placeholderTxt}}"
      name="nameObject"
      [(ngModel)]="name"/>
  </form>
  <p>{{someTxt}}</p>`
})
export class NameformComponent {
  name : string;
  someTxt : string;
  placeholderTxt : string = 'Give name';
  jussi : boolean = false;
  @Input() forbiddenName : string;
  constructor(){
    this.log('nameform: constructor');
  }
  ngDoCheck(){
    if(this.name === this.forbiddenName){
      //this.name = 'Wrong name!';
      this.placeholderTxt = `Give name, ${this.forbiddenName} is forbidden`;
      this.name = '';
      this.log('if');
    }else if(this.name === 'Jussi'){
      this.placeholderTxt = 'Give name';
      this.someTxt = `Welcome ${this.name}`;
    }
    this.log('nameform: OnDoCheck');

  }
  ngOnInit(){
    this.log('nameform: OnInit');
  }
  ngOnDestroy(){
    this.log('nameform: OnDestroy');
  }

  ngOnChanges() {
    if(this.forbiddenName === 'Jussi'){
      this.jussi = true;
      this.someTxt = 'Jussi should always allowed. Give some other name.'
      this.forbiddenName = 'Heikki';
      this.placeholderTxt = 'Give name, Heikki is not allowed';
    }
    this.log("nameform: ngOnChanges")    
  }
  public log(msg: string) : void {
    console.log(`${new Date()} | ${msg}`);
  }
  

}
