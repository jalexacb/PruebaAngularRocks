import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BandaService } from 'src/app/core/services/banda.service';
import { Banda } from 'src/app/shared/models/banda';

@Component({
  selector: 'app-banda-detalle',
  templateUrl: './banda-detalle.component.html',
  styleUrls: ['./banda-detalle.component.css']
})
export class BandaDetalleComponent implements OnInit {
  public banda: Banda = Object();
  public bandas: Array<Banda> = [];
  public id: string = "";
  public enlace: any;
  safeSrc!: SafeResourceUrl;
  constructor(
    private bandaService: BandaService,
    private rutaActiva: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) { 
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getBandas().then(
      (res:any) => {
        this.bandas = res;
        this.banda = this.bandas.filter(banda => banda.id === this.id)[0];
      },
      err => console.log(err),
    )
  }

  getBandas(qs: String = ""){
    return new Promise((resolve, reject) => {
      this.bandaService.getAll().subscribe(
        (res:any) => {
          resolve(res);
        },
        err => {
          reject();
        }
      );
    });
  }

  verVideo(url_video:string){
    this.enlace = url_video;
    
  }

  getVideoIframe() {
    var video, results;
 
    if (this.enlace === null) {
        return '';
    }
    results = this.enlace.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? this.enlace : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}
