
import {Component, Input,Output,EventEmitter} from '@angular/core'


@Component({
selector:'app-child',
template:`
<div class="container">
<div class="row">
<h3>Fill Details</h3>
</div>

<table class="table table-bordered">
<thead>
<tr>
<th>Name</th>
<th>Email id</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let u of userdata">
<td>{{u.name}}</td>
<td>{{u.emailid}}</td>
</tr>
</tbody>
</table>

<table class="table table-bordered">

<tr>
<td><input type="text" placeholder="enter your name" #name></td>
<td><input type="text" placeholder="enter your emailid" #emailid></td>
<td><button class="btn btn-info" (click)="submit(name.value,emailid.value)">Submit</button></td>
</tr>
</table>


</div>
`,
styles:[]

})


export class childcomponent{
  @Input() public userdata;

  @Output() public item=new EventEmitter();

  submit(uname,uemailid)
  {
    this.item.emit({name:uname, emailid:uemailid})
  }
    constructor(){ 

    }



}