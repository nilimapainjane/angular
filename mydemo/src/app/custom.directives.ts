

import {Directive ,ElementRef, Renderer, HostListener } from '@angular/core'

@Directive ({
    selector:'[cccardD]'
})

export class CustomDirective{

    constructor(private E1:ElementRef,private RD :Renderer){
        //E1.nativeElement.style.backgroundColor='red';

// RD.setElementStyle(E1.nativeElement,'backgroundColor','yellow');
// RD.setElementStyle(E1.nativeElement,'color','blue');
// RD.setElementStyle(E1.nativeElement,'fontSize','40px');


    }

    @HostListener('mousemove') MouseEvent(){
        this.RD.setElementStyle(this.E1.nativeElement,'backgroundColor','yellow');
        this.RD.setElementStyle(this.E1.nativeElement,'color','blue');
        this.RD.setElementStyle(this.E1.nativeElement,'fontSize','40px');

    }

}