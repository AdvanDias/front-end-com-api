import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    private productUrl: string = 'https://projeto-nane.herokuapp.com/api/v1/product';
    //private productUrl: string = 'http://localhost:3000/product';

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.productUrl);
    }

    retrieveById(id: number): Observable<Product>{
        return this.httpClient.get<Product>(`${this.productUrl}/${id}`);
    }

    save(product: Product): Observable<Product>{
        if(product.id){
            console.log('PRODUCT SERVICE: ',product.id)
          return this.httpClient.put<Product>(`${this.productUrl}/${product.id}`, product);
        }else{
            return this.httpClient.post<Product>(`${this.productUrl}/`, product);
        }
    }

    created(product: Product): Observable<Product>{
        return this.httpClient.post<Product>(`${this.productUrl}/`, product);
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.productUrl}/${id}`);
    }

}
