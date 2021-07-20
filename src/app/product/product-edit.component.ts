import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "./product";
import { ProductListComponent } from "./product-list.component";

@Component({
    templateUrl: 'product-edit.component.html'
})

export class ProductEditComponent implements OnInit{
    
    product!: Product;
    
    productlist!: ProductListComponent;

    constructor(private activatedRouter: ActivatedRoute, private productService: ProductService){}


    
    ngOnInit(): void {
        this.productService.retrieveById(Number(this.activatedRouter.snapshot.paramMap.get('id'))).subscribe({
            next: product => this.product = product,
            error: err => console.log('Error',err)
        });
    }

    save(): void{
        this.productService.save(this.product).subscribe({
            next: product => { alert('Produto Editado Com Sucesso!');
            console.log('Editado com Sucesso!',product);
            this.productService.retrieveAll();
        },
            error: err => console.log('Error',err)
        });
    }

    

}