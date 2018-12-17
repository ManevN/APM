import { Component, OnChanges, Input, Output } from "@angular/core";
import { ProductListComponent } from "../products/product-list.component";
import { EventEmitter } from "@angular/core";

@Component({
    selector:"pm-star",
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})



export class StarComponent implements OnChanges{ 
    @Input() rating: number;
    starWidth: number ;
    @Output() retingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 75/5;
    }

    onClick(){

        this.retingClicked.emit('The rating '+ this.rating +' was clicked!')

    }
}