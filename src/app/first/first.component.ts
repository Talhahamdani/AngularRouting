import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  productid:any;
  isRight:boolean=false;
  productDetails:any;

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


  constructor(private route:ActivatedRoute) {
  }
   ngOnInit()
   {

     this.route.params.subscribe((id) =>{
       console.log('id ',id)
       this.productid = id['productId'];
     })

     this.productDetails = this.productList.find((item) => item.id == this.productid)
     console.log(this.productDetails)

   // if(this.productList==this.firstId)
   // {
   //   this.isRight=true;
   // }
     // this.isRight = !!this.firstId;
     // if(this.firstId=='id')
     // {
     //   this.firstId = this.activatedRoute.snapshot.paramMap.get('id')
     //   console.log(this.firstId)
     //   this.isRight=true;
     // }
     // if(this.firstId=='id')
     // {
     //   this.firstId = this.activatedRoute.snapshot.paramMap.get('id')
     //   console.log(this.firstId)
     //   this.isRight=true;
     // }
     // if(this.firstId=='id')
     // {
     //   this.firstId = this.activatedRoute.snapshot.paramMap.get('id')
     //   console.log(this.firstId)
     //   this.isRight=true;
     // }


       // Check if 'firstId' has a valid value (not null or undefined)



   }


  // protected readonly first = first;
} //closing bracket
