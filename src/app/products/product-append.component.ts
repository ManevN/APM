import { Component, OnInit } from "@angular/core";
import {Router } from "@angular/router";
import {FormGroup,  FormControl} from "@angular/forms";

import {  Product } from "./product";


@Component({
    templateUrl:"/product-append.component.html"
})

export class ProductAppendComponent{

    productForm : FormGroup;
    product = new Product();

    
    constructor(private router:Router){

    }

    ngOnInit(){
        this.productForm = new FormGroup({
            productName:new FormControl(),
            productCode:new FormControl(),
            releaseDate:new FormControl(),
            price:new FormControl(),
            description:new FormControl(),
            starRating:new FormControl(),
            imageUrl:new FormControl()
        });
    }

    onBack():void{
        this.router.navigate(['/products']);
    }

    onSave():void{
        this.product.productName = this.productForm.controls.productName.value;
        this.product.productCode = this.productForm.controls.productCode.value;
        this.product.releaseDate = this.productForm.controls.releaseDate.value;
        this.product.price = this.productForm.controls.price.value;
        this.product.description = this.productForm.controls.description.value; 
        this.product.starRating = this.productForm.controls.starRating.value;
    }
}