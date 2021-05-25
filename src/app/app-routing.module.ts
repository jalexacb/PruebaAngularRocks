import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'banda',
        component: AppComponent,
      },
      {
        path: 'banda/detalle/:id',
        component: BandaDetalleComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
