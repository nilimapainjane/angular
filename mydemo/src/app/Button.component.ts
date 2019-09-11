
import { Component } from '@angular/core';


//[disabled]="true"
@Component({
  selector: 'app-button',
  template: `
  <div class="container">
  <div class="row justify-content-center">
  <H1>  Buttons Demo  </H1>
  </div>
  <div class="row justify-content-center">
  <button 
   (click)="functionMale()"[disabled]="activeM" >Male
   </button>

  <button (click)="functionFemale()" [disabled]="activeF" >Female</button>
 
  </div>
  <div class="row justify-content-center">
  <img [src]="imgurl"/>
  </div> 

<div class="row justify-content-center">
  <h2>{{username}}</h2>
  </div>
  </div>
  
  `,
  styles: [`
  .container{
    text-align=center;
  }`]
})


export class buttoncomponent{

    public imgurl:string ;
   public activeF: boolean;
   public activeM: boolean;
   public username:string;



public functionMale()
{        
    this.imgurl="../assets/img/male.png";
    this.username="Raj patil";
    this.activeF=false;
    this.activeM=true;    
}
   
public functionFemale()
{  
   this.imgurl="../assets/img/female.png";
   this.username="Pooja patil";
   this.activeM=false;
  this.activeF=true;
}
  
}