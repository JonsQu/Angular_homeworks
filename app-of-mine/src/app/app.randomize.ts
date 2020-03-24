import {Directive, ElementRef,  HostListener, Input } from '@angular/core';

@Directive({
    selector: '[randomize]'
})

export class Randomize{
    elRef : ElementRef;
    rgb : string;
    @Input() rb : boolean;
    @Input() gb : boolean;
    @Input() bb : boolean;
    @Input('randomize') colors : boolean[];
    constructor(elRef : ElementRef){
        this.elRef = elRef;
    }
    @HostListener('mousewheel', ['$event']) onMouseWheel(event){
        let r = 0;
        let g = 0;
        let b = 0;
        if(this.rb){
            r = this.randomColor();
        }
        if(this.gb){
            g = this.randomColor();
        }
        if(this.bb){
            b = this.randomColor();
        }
        this.rgb = `rgb(${r},${g},${b})`;
        console.log(this.colors);
        console.log(this.rb);
        console.log(this.gb);
        console.log(this.bb);
        console.log(this.rgb);
    }
    randomColor() : number{
        return Math.floor(Math.random() * 255);
    }
    ngAfterViewChecked(){
        this.elRef.nativeElement.style.backgroundColor = this.rgb;
        console.log('view checked');
    }
    ngOnChanges(){
        this.rb = this.colors[0];
        this.gb = this.colors[1];
        this.bb = this.colors[2];
    }
}