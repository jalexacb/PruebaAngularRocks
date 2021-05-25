import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BandaItem } from './Informacion/banda';
import { BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent
  ],
  imports: [

    //Módulos internos
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //Módulos externos
    RouterModule,
    

  ],
  providers: [
    BandaItem
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
