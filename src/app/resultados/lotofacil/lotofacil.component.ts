import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.scss']
})
export class LotofacilComponent implements OnInit {
  lotofacil: any;
  
  constructor(public resultados: ResultadosService) { }

  ngOnInit(): void {
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
