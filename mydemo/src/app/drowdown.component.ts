
import {Component} from '@angular/core'


@Component({
selector:'app-dropdown',
template:`
<div class="container">
<div class="row">
<div class="col-md-8">
<div class="header" (click)="dropdown()">
Header
<span class="fa pull-right" 
[class.fa-chevron-down]="!dropdownval"
[class.fa-chevron-up]="dropdownval"
></span>
</div>

<div class="body" *ngIf="dropdownval">body</div>

</div>
</div>`,
styles:[`

.header{
    background-color:red;
    height:30px;
    width:500px;
}

.body{
    background-color:yellow;
    height:300px;
    width:500px;
}


`]

})


export class dropdowncomponent{


    public dropdownval:boolean=false;
    constructor(){
    }
    dropdown()
    {
              this.dropdownval=!this.dropdownval;
    }

}