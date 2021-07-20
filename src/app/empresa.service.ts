import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empresa } from "./empresa";

@Injectable({
    providedIn: 'root'
})

export class EmpresaService{

    private empresaUrl: string = 'https://projeto-nane.herokuapp.com/api/v1/empresa';
    //private empresaUrl: string = 'http://localhost:3000/empresa';

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Empresa[]>{
        return this.httpClient.get<Empresa[]>(this.empresaUrl);
    }

    retrieveById(id: number): Observable<Empresa>{
        return this.httpClient.get<Empresa>(`${this.empresaUrl}/${id}`);
    }

    created(empresa: Empresa): Observable<Empresa>{
        return this.httpClient.post<Empresa>(`${this.empresaUrl}/`, empresa);
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.empresaUrl}/${id}`);
    }
}