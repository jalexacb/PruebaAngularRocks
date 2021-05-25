import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BandaService } from 'src/app/core/services/banda.service';
import { Banda } from 'src/app/shared/models/banda';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css'],
  providers: [BandaService]
})
export class BandaListComponent implements OnInit {
  public modalRef!: BsModalRef;
  public bandas: Array<Banda>;
  public bandasOriginal: Array<Banda>;
  public busqueda: string = "";
  public banda: Banda = Object();
  constructor(
    private bandaService: BandaService,
    private modalService: BsModalService,
  ) { 
    this.bandas = [];
    this.bandasOriginal = [];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEditar(template: TemplateRef<any>, id: string) {
    this.banda = this.bandasOriginal.filter(band => band.id === id)[0];
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.getBandas().then(
      res => console.log(res),
      err => console.log(err),
    )
  }

  onSearch(){
    this.bandas = this.bandas.filter(band => band.nombre.toLocaleUpperCase().trim().includes(this.busqueda.toUpperCase().trim()));
  }

  onKeyBackSpace(){
    if(this.busqueda == ''){
       this.bandas = this.bandasOriginal;
    }
  }

  getBandas(qs: String = ""){
    return new Promise((resolve, reject) => {
      this.bandaService.getAll().subscribe(
        (res:any) => {
          console.log(res);
          this.bandasOriginal = res;
          this.bandas = res;
          resolve(this.bandasOriginal);
        },
        err => {
          reject();
        }
      );
    });
  }

  guardarBanda(){
    
    this.bandas.push(this.banda);
    this.banda = Object();
    this.modalRef.hide();
  }

  editarBanda(){
   this.modalRef.hide();
  }

  eliminarBanda(i:number){
    this.bandas.splice(0, i);
  }
}
