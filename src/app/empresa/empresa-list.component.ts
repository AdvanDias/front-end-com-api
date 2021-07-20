import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Empresa } from "../empresa";
import { EmpresaService } from "../empresa.service";


@Component({
    templateUrl: './empresa-list.component.html',
    styleUrls: ['empre-stile.css']
})

export class EmpresaListComponent implements OnInit{
    
    _empresa: Empresa[] = [];

    empresa!: Empresa;

    empresanovocard: Empresa = new Empresa();

    datageral: Date = new Date();


    constructor(private empresatService: EmpresaService, private activatedRouter: ActivatedRoute,public datepipe: DatePipe){}

    ngOnInit(): void {
       this.retriveAll();
       this.empresanovocard.nome = 'NovoCardViaAplica';
     
       this.empresanovocard.total = 0;
       this.empresanovocard.qntd_itens = 0;
     
    }

    retriveAll(): void{
        this.empresatService.retrieveAll().subscribe({
            next: empresa => {
                this._empresa = empresa;
            },
            error: err => console.log('Error',err)
        })
    }
    created(): void{
        
        this._empresa.forEach(element => {
            if (element.data == this.datepipe.transform(this.datageral, 'yyyy-MM-dd')!) {
                console.log('data', element.data)
             this.empresanovocard.data = element.data;
            }    
        });
        if (this.empresanovocard.data) {
            console.log('JÁ EXISTE UM CARD PARA A DATA DE HOJE');
            alert('JÁ EXISTE UM CARD PARA A DATA DE HOJE '+ this.datepipe.transform(this.datageral, 'dd-MM-yyyy')!);
        }else{
            this.empresanovocard.data = this.datepipe.transform(this.datageral, 'yyyy-MM-dd')!;
            this.empresatService.created(this.empresanovocard).subscribe({
                next: empresa => {console.log('Novo Card Empresa Criado Com Sucesso!',empresa), this.ngOnInit();},
                error: err =>console.log('Error',err)
                 });
        }

       
       
    }


    deleteById(empresaId: number): void{
        let valid = confirm('Deseja Continuar a Operação ?');
        if (valid) {
        this.empresatService.deleteById(empresaId).subscribe({
            next: () => {
                console.log('Deletado com Sucesso!');
                this.ngOnInit();
            },
            error: err => console.log('Error',err)
        })
        }

    }

    emaberto(): void{
        alert('AINDA EM DESENVOLVIMENTO! ')
    }

}