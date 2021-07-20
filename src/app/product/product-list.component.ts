import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "./product";

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['teste.css']
})

export class ProductListComponent implements OnInit{
    
    _product: Product[] = [];

    product!: Product;

    _filterBy!: string;

    filtraproduct: Product[] = [];

    public idempresa: any;
    public dataempresa: any;

    constructor(private activatedRouter: ActivatedRoute, private productService: ProductService){
        this.activatedRouter.params.subscribe(params => this.idempresa = params['id']);
        this.activatedRouter.params.subscribe(params => this.dataempresa = params['data']);
    }
    
    ngOnInit(): void {
       this.retrieveAll();
    }

    set filter(value: string){
        this._filterBy = value;
        this.filtraproduct = this._product.filter((product: Product) => product.nome.toLocaleLowerCase()
        .indexOf(this._filterBy.toLocaleLowerCase()) > -1 && product.id_empresa == this.idempresa);
    }


    get filter(){
        return this._filterBy;
    }

    retrieveAll(): void {

        this.productService.retrieveAll().subscribe({
            next: product => {
               this._product = product;
               this.filtraproduct = this._product.filter((product: Product) => product.id_empresa == this.idempresa).sort((a,b) => b.id - a.id);
            },
            error: err => console.log('Error',err)
        })
    }

    deleteById(productId: number): void{
        let valid = confirm('Deseja MESMO excluir esse item ?');
        if (valid) {
            this.productService.deleteById(productId).subscribe({
                next: () => {
                    console.log('Deletado com Sucesso!');
                    this.retrieveAll();
                },
                error: err => console.log('Error',err)
            })
        }
       
    }
}