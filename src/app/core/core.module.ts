import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmpresaMOdule } from "../empresa/empresa.module";
import { Erro404Component } from "./component/erro-404/erro404.component";
import { NavBarComponent } from "./component/nab-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Erro404Component
    ],
    imports:[
        EmpresaMOdule,
        RouterModule.forChild([
            {
                path: '**', component: Erro404Component
            }
        ])
    ],
    exports:[
        NavBarComponent
    ]
})

export class CoreModule{}