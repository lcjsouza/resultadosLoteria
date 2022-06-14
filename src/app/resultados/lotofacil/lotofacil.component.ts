import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.scss']
})
export class LotofacilComponent implements OnInit {
  lotofacil: any;
  spinner: boolean = false;
  
  constructor(public resultados: ResultadosService) { }

  ngOnInit(): void {
    this.ultimoConcurso();
  }

  ultimoConcurso(){
    this.spinner = true;
    this.resultados.getLotofacil()
    .then(response => {
      this.lotofacil = response;
      this.spinner = false;
      console.log(response);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Ops !',
        text: 'Não foi possível carregar o último sorteio. Tente buscar pelo número do sorteio.',
        icon: 'error'
      })
      console.error(error);
    });
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
    this.spinner = true;
    this.resultados.getLotofacilSorteio(numero)
    .then(response => {
      this.lotofacil = response;
      this.spinner = false;
      console.log(response);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Ops !',
        text: 'Concurso não encontrado. Verifique o número digitado e tente novamente.',
        icon: 'error',
      });
      console.error(error);
    });
  }

}
