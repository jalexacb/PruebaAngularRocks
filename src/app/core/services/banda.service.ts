import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Banda } from 'src/app/Informacion/banda';
import data from 'src/assets/json/bandas.json';
import { Observable } from 'rxjs';
import { Banda } from 'src/app/shared/models/banda';
// import { Banda } from '../../Informacion/banda';
@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private url: string;
  private _jsonURL = 'assets/json/bandas.json';
  constructor(
    public _http: HttpClient
  ) { 
    this.url = environment.url;
  }

  //Solo con archivo .json local

  getAll(): Observable<any> {
    return this._http.get(this._jsonURL);
  }
  
  
  //Si fuera con una API externa

  // getAll(qs: string = "") {
  //   const headers = new HttpHeaders().set('Content-Type','aplication/json');
  //   return this._http.get(`${this.url}/banda${qs}`,{headers:headers});
  // }

  getById(id:string,qs: string = "") {
    const headers = new HttpHeaders().set('Content-Type','aplication/json');
    return this._http.get(`${this.url}/banda/${id}${qs}`,{headers:headers});
  }

  delete(id:string, qs:string = ""){
   
    
    let params = null;
    const headers = new HttpHeaders().set('Content-Type','aplication/json');
    return this._http.post(`${this.url}/banda/delete/${id}${qs}`,params,{headers:headers});
  

  }

  save(banda: Banda){
    let params = banda;
    const headers = new HttpHeaders().set('Content-Type','aplication/json');
    return this._http.post(`${this.url}/banda/store`,params,{headers:headers});
  }

  update(banda: Banda){
    let params = banda;
    const headers = new HttpHeaders().set('Content-Type','aplication/json');
    return this._http.post(`${this.url}/banda/${banda.id}`,params,{headers:headers});
  }

}
