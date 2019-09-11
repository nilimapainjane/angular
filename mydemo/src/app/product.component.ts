
import {Component} from '@angular/core'
import {TVcomponent} from './TV.component'
import {ACcomponent} from './AC.component'


@Component({
selector:'app-productdown',
template:`

<div class="container justify-center">

<div class="row"><h3>All Accessories</h3></div>

<div class="row">
<div class="col-sm-4 btn-group-vertical allbuttons">

<button class="btn btn-info btn-md"
(click)="ProductName='TV'">TV</button>

<button class="btn btn-primary btn-md" 
(click)="ProductName='AC'">AC</button> 

<button class="btn btn-info btn-md" 
(click)="ProductName='mob'">Mobile </button> 

<button class="btn btn-primary btn-md" 
(click)="ProductName='laptop'">Laptop </button> 

</div>


<div class="col-sm-8">
<div *ngIf="ProductName" [ngSwitch]="ProductName">

<div *ngSwitchCase="'TV'">
<app-TV></app-TV>
</div>

<div *ngSwitchCase="'AC'">
<app-AC></app-AC>
</div>


<div *ngSwitchCase="'mob'">
<app-mob></app-mob>
</div>

<div *ngSwitchCase="'laptop'">
<app-laptop></app-laptop>
</div>

<div *ngSwitchDefault><h3>Not found</h3> </div>
</div>

</div>
</div>
</div>

`,
styles:[`
.allbuttons{
    margin-top="30px";
    background-color="red";
}



`]

})


export class productcomponent{

    public ProductName:string;
    constructor(){
    }
}