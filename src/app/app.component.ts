  import {Component,Input} from "@angular/core";

  @Component({
    selector:"pm-root",
    templateUrl:"./app.component.html"
             
  })

  export class AppComponent{
    pageTitle : string = "Acme Product Managment";
    isChecked = true;


    onChange($event){
      console.log($event);
    }


  }