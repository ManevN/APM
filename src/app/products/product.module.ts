import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import {ProductAppendComponent} from './product-append.component'
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductAppendComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { 
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
        {path: 'productAppent', component : ProductAppendComponent}  
        
    ]),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
