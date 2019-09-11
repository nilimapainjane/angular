

import {Component} from '@angular/core'

@Component({
selector:'`app-laptop`',
template:`<h3>Laptop</h3>


<div class="row">
<div class="col-xs-1-12">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Samsung 20000</h3>
      <p class="card-text"><img src="{{'../assets/img/lap.png'}}"/></p>
    </div>
  </div>
</div>

<div class="col-xs-4-12">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">HP 30000</h3>
      <p class="card-text"><img src="{{'../assets/img/lap1.png'}}"/></p>
    </div>
  </div>
</div>

<div class="col-xs-4-12">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">SONY 25000</h3>
      <p class="card-text"><img src="{{'../assets/img/lap.png'}}"/></p>
    </div>
  </div>
</div>



<div class="col-xs-4-12">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">DELL 20000</h3>
      <p class="card-text"><img src="{{'../assets/img/lap1.png'}}"/></p>
    </div>
  </div>
</div>


</div>

`,
styles:[]
})

export class laptopcomponent{
constructor()
{

}

}