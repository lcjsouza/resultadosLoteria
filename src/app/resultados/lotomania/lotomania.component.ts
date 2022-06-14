import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.component.html',
  styleUrls: ['./lotomania.component.scss']
})
export class LotomaniaComponent implements OnInit {
  lotomania: any;
  spinner: boolean = false;
  
  constructor(public resultados: ResultadosService) { }

  ngOnInit(): void {
    this.ultimoConcurso();
  }

  ultimoConcurso(){
    this.spinner = true;
    this.resultados.getLotomania()
    .then(response => {
      this.lotomania = response;
      this.spinner = false;
      console.log(response);
    })
    .catch(error => console.error(error)
    )
  }

  buscarConcurso(){
    const concurso = $('#n-concurso').val();
    if (concurso === '' || concurso === null) {
      console.log('Vazio');
    }else{
      this.lotomaniaConcurso(String(concurso));
    }
    
  }

  lotomaniaConcurso(numero: string){
    this.resultados.getLotomaniaSorteio(numero)
    .then(response => {
      this.lotomania = response;
      console.log(response);
    })
    .catch(error => console.error(error)
    )
  }

}
