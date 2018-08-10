import { Component } from '@angular/core';
import { NavController, Checkbox } from 'ionic-angular';
import { NgIf } from '@angular/common';
import { isCheckedProperty } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  WhippedCream;
  Chocolate;
  total = 0;
  quantity= 0;
  Name;
  item;
  item1;
  price =0;
  price1 =0
  
  constructor(public navCtrl: NavController) {

  }


  plus(){
   this.quantity +=1;
  }
  minus(){
    if(this.quantity >0)
    {
      this.quantity -=1;
    }
    
  }

  order()
  {
    if(this.WhippedCream == true){
      
      this.price = 20;
      this.item1 = "+whipped Cream";
    }


if(this.Chocolate == true){
 this.price1 = 30;
 this.item = "+Chocolate";
} 

 this.total = this.quantity * this.price + this.quantity*this.price1;
}
Reset(){
  this.Name = "";
  this.total = 0;
  this.quantity = 0;
this.item= "";
this.item1= "";
  this.Chocolate = false;
  this.WhippedCream = false;
}

}




