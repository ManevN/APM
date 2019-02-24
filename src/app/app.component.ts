  import {Component,Input} from "@angular/core";
  import {IProduct} from "./products/product"

  @Component({
    selector:"pm-root",
    templateUrl:"./app.component.html"
             
  })

  export class AppComponent{
    pageTitle : string = "Acme Product Managment";
    isChecked = true;

    colors = [
      { id:'1', name:'red'},
      { id:'2', name:'green'},
      { id:'3', name:'blue'}
    ]

    


    onChange($event){
      console.log($event);
    }


  }