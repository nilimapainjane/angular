import { Component, OnInit } from '@angular/core';
import {IgitUser} from '../../model/gitusers';
import {GitUsersData} from '../../shared/gituser.services'

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private gitusers:GitUsersData) { }

  public gituserdetails:IgitUser[];
  public gitfollowersdata:IgitUser[];
  //public searchword=document.getElementById("Search");

  value = '';
  onEnter(value: string)
   { 
     this.value = value; 
     this.gitusers.getusername(value);
     
     this.gitusers.GitUserdata()
     .subscribe(data=>{this.gituserdetails=data
     console.log (data)});
 
 
     this.gitusers.Followersdata()
     .subscribe(info=>{this.gitfollowersdata=info
     console.log(info)})

  }



  ngOnInit() {   

  }

  

}
