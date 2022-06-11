import { Component, OnInit } from '@angular/core';
import { ResultadosInterface } from './resultados';
import { ResultadosService } from './resultados.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  lotofacil: any;
  

  constructor(public resultados: ResultadosService) { }

  ngOnInit() {
    this.ultimoConcurso()
  }

  

  ultimoConcurso(){
    this.resultados.getLotofacil()
    .then(response => {
      this.lotofacil = response;
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
      this.lotofacilConcurso(String(concurso));
    }
    
  }

  lotofacilConcurso(numero: string){
    this.resultados.getLotofacilSorteio(numero)
    .then(response => {
      this.lotofacil = response;
      console.log(response);
    })
    .catch(error => console.error(error)
    )
  }

}
