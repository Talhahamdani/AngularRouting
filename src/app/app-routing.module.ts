import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";

import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'products/:productId',
    component:FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
