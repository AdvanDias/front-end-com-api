import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PipeModule } from "../shared/pipe/pipe.module";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { ProductCreateComponent } from "./product-create.component";
import { ProductEditComponent } from "./product-edit.component";
import { ProductListComponent } from "./product-list.component";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductEditComponent,
        ProductCreateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipeModule,
        RouterModule.forChild([
            {
                path: 'product', component: ProductListComponent
            },
            {
                path: 'product/:id/:data', component: ProductListComponent
            },
            {
              path: 'product/edit/:id/:data', component: ProductEditComponent
            }
        ])
    ]
})

export class ProductModule{

}