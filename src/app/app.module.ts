import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BandaItem } from './shared/models/banda';
import { BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';

import { BandaListComponent } from './components/banda-list/banda-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent,
    BandaListComponent
  ],
  imports: [

    //Módulos internos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    //Módulos externos
    

  ],
  providers: [
    BandaItem
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
