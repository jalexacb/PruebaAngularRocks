import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandaService } from 'src/app/core/services/banda.service';
import { Banda } from 'src/app/Informacion/banda';

@Component({
  selector: 'app-banda-detalle',
  templateUrl: './banda-detalle.component.html',
  styleUrls: ['./banda-detalle.component.css']
})
export class BandaDetalleComponent implements OnInit {
  public banda: Banda = Object();
  public id: string = "";
  constructor(
    private bandaService: BandaService,
    private rutaActiva: ActivatedRoute,
  ) { 
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getById().then(
      res => console.log(res),
      err => console.log(err),
    )
  }

  getById(qs: String = ""){
    return new Promise((resolve, reject) => {
      this.bandaService.getById(this.id).subscribe(
        (res:any) => {
          console.log(res);
          this.banda = res;
          resolve(this.banda);
        },
        err => {
          reject();
        }
      );
    });
  }
}
