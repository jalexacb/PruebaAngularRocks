import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';
import { BandaListComponent } from './components/banda-list/banda-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'banda',
        component: BandaListComponent
      },
      {
        path: 'banda/detalle/:id',
        component: BandaDetalleComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
