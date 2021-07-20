import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { EmpresaMOdule } from './empresa/empresa.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    CoreModule,
    EmpresaMOdule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'empresa', pathMatch: 'full'
      }
     
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
