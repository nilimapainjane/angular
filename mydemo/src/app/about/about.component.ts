import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public products=[{
    
  id:1,
  name:'nilima'

},
{
  id:2,
  name:'pooja'
},
{
id:3,
name:'raj'
}
]
  constructor() { }

  ngOnInit() {
  }

}
