
import {Component} from '@angular/core'

@Component({
selector:'app-pipe',
template:`

<div class="container justify-content-center">

<div class="row">
<h2 cccardD>My name is nilima</h2>
</div>

<div class="row">
<h2 *ngIf="myname.length > 5 ; else notfound">{{myname}}</h2>
<ng-template #notfound><h4>string length more then 5</h4></ng-template>
</div>



<div class="row">
<h2>{{userdetails.date | date:shortdate}}</h2>
</div>

<div class="row">
<h2>{{userdetails.name | uppercase}}</h2>
</div>

<div class="row">
<h2>{{userdetails.fno}}</h2>
</div>


<div class="row">
<h2>{{userdetails.no | number }}</h2>
</div>


<div class="row">
<h2>{{userdetails.salary | currency:'EUR'}}</h2>
</div>


<div class="row">
<h4>{{userdetails | json }}</h4>
</div>

<hr>

<div class="row">
<h4>{{para | content:'15'}}</h4>
</div>

<hr>
<div class="row">
<img src="{{imgurl | content :'true'}}"/>
</div>

</div>

`,  
styles:[`
`]

})


export class pipecomponent{


    public myname: string='ni';
    public para='india is my country,all indians are my brother and sister';
public imgurl:string ='http://lorempixel.com/400/200/';

    constructor(){
    }
 

    public userdetails={
        name:'NILI',
        salary:'574815',
        no:78077653234,
        date:new Date(),
        fno:'12.5684'
    }

}