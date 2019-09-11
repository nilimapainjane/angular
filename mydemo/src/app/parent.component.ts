
import {Component} from '@angular/core'


@Component({

selector:'app-parent',
template:`
<div class="container"> 
<div class="row">
<h2>Parent Area</h2>

<app-child [userdata]="users" (item)="adduser($event)"></app-child>

</div>
</div>
`,

styles:[]
})

export class parentcomponent{ 
    constructor(){
    }    
    adduser(data){
        this.users.unshift(data);
       }

    public users=[{    
    name:'nilima',
    emailid:'npp@gmail.com'
    },
{
    name:'pooja',
    emailid:'pp@gmail.com' 
},

{
    name:'hanny',
    emailid:'hh@gmail.com' 
},
]





}