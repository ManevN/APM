import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { IProduct } from './product';
import { ProductService} from "./product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product:IProduct;

  constructor(private route:ActivatedRoute,  private router:Router, private productService:ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(data => this.product = data.find(x => x.productId == id))
        
  }

  onBack():void{
    this.router.navigate(['/products']);
  }


}
