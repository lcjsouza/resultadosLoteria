import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultadosInterface } from './resultados';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(public http: HttpClient) { }

  getLotofacil(){
    return this.http.get<ResultadosInterface>(`${environment.API_LOTOFACIL}`).toPromise();
  }
  getLotofacilSorteio(sorteio: string){
    return this.http.get<ResultadosInterface>(`${environment.API_LOTOFACIL}/${sorteio}`).toPromise();
  }

  getLotomania(){
    return this.http.get<ResultadosInterface>(`${environment.API_LOTOMANIA}`).toPromise();
  }
  getLotomaniaSorteio(sorteio: string){
    return this.http.get<ResultadosInterface>(`${environment.API_LOTOMANIA}/${sorteio}`).toPromise();
  }

  getQuina(){
    return this.http.get<ResultadosInterface>(`${environment.API_QUINA}`).toPromise();
  }
  getQuinaSorteio(sorteio: string){
    return this.http.get<ResultadosInterface>(`${environment.API_QUINA}/${sorteio}`).toPromise();
  }

  getMegaSena(){
    return this.http.get<ResultadosInterface>(`${environment.API_MEGASENA}`).toPromise();
  }
  getMegaSenaSorteio(sorteio: string){
    return this.http.get<ResultadosInterface>(`${environment.API_MEGASENA}/${sorteio}`).toPromise();
  }
}
