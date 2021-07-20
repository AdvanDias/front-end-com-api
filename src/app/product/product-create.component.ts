import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "./product";
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { isNull } from "@angular/compiler/src/output/output_ast";

@Component({
    selector: 'app-product-create',
    templateUrl: 'product-create.component.html'
})

export class ProductCreateComponent implements OnInit{

    productCreate: Product = new Product();
    
    _product: Product[] = [];

    guardaid!: number;

    datageral: Date = new Date();

    public userId: any;
    public userdatacriacao: any;


    constructor(private activatedRouter: ActivatedRoute,private productService: ProductService,private productlist: ProductListComponent, public datepipe: DatePipe){
        
    }
    
    ngOnInit(): void {
        this.retrieveAll();
        this.activatedRouter.params.subscribe(params => this.userId = params['id']);
        this.activatedRouter.params.subscribe(params => this.userdatacriacao = params['data']);  
    }

    created(): void{
        let tratar = this.productCreate.price.toString().replace(',','.');
        this.productCreate.price = Number(tratar);
        this.productCreate.data_criacao = this.userdatacriacao;
        this.productCreate.id_empresa = Number(this.userId);
        this.productService.created(this.productCreate).subscribe({
            next: product => {console.log('Product Criado Com Sucesso!',product), this.productlist.ngOnInit(); alert('Criado Com Sucesso!')},
            error: err =>console.log('Error',err)
        });
        this.productCreate = new Product();
    }


    retrieveAll(): void {

        this.productService.retrieveAll().subscribe({
            next: product => {
               this._product = product;
            },
            error: err => console.log('Error',err)
        })
    }



   

}