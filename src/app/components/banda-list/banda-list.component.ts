import { Component, OnInit } from '@angular/core';
import { BandaService } from 'src/app/core/services/banda.service';
import { Banda } from 'src/app/Informacion/banda';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css'],
  providers: [BandaService]
})
export class BandaListComponent implements OnInit {

  public bandas: Array<Banda>;
  constructor(
    private bandaService: BandaService,
  ) { 
    this.bandas = [];
  }

  ngOnInit(): void {
    this.getBandas().then(
      res => console.log(res),
      err => console.log(err),
    )
  }

  getBandas(qs: String = ""){
    return new Promise((resolve, reject) => {
      this.bandaService.getAll().subscribe(
        (res:any) => {
          console.log(res);
          this.bandas = res;
          resolve(this.bandas);
        },
        err => {
          reject();
        }
      );
    });
  }
}
