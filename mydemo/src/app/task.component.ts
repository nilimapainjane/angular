import {Component} from '@angular/core'

@Component({
selector:'app-task',
template:`
<div class="container justify-content-center">
<div class="row">
<i class="fa fa-heart fa-5x"
[style.color]="'cnt' ? 'purple':'red'"
[class.fa-heart-o]='ilike'
(click)="Likeheart()"> </i>
<div>{{cnt}}</div>

<div class="fa fa-heart fa-2x"></div>


</div>
</div>
`,
styles:[`.heart{color:blue}`]
})

export class taskcomponent{
    public ilike:boolean;
    public cnt:number=10;
    Likeheart()
    {
        this.ilike=!this.ilike;
        this.cnt=this.cnt-1;
    }

}