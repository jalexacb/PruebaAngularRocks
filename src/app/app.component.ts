import { Component } from '@angular/core';
import { BandaService } from './core/services/banda.service';
import { Banda } from './Informacion/banda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BandaService]
})
export class AppComponent {
  title = 'angularrocks';

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
