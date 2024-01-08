import { Component } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  productList=[
    {
      id:1,
      name:'Iphone 11',
      price:120000,
      details:'it is Apple Best Selling Phone ever Launched in the Marekt',
    },
    {
      id:2,
      name:'Iphone 12',
      price:120000,
      details:'it is Apple Best Selling Phone ever Launched in the Marekt',
    },
    {
      id:3,
      name:'Iphone 13',
      price:120000,
      details:'it is Apple Best Selling Phone ever Launched in the Marekt',
    }
  ]
  //Event Routing
// constructor(private route:Router) {
//     router.events.subscribe((event))=>{
//       console.log(event)
//   }


}
