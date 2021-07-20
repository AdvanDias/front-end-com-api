import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmpresaListComponent } from "./empresa-list.component";

@NgModule({
    declarations: [
        EmpresaListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'empresa', pathMatch: 'full'
            },
            {
                path: 'empresa', component: EmpresaListComponent
            }
        ])
    ]
})

export class EmpresaMOdule{}