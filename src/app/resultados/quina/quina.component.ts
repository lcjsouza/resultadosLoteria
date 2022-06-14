import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultadosService } from '../resultados.service';

@Component({
  selector: 'app-quina',
  templateUrl: './quina.component.html',
  styleUrls: ['./quina.component.scss']
})
export class QuinaComponent implements OnInit {
  quina: any;
  spinner: boolean = false;
  
  constructor(public resultados: ResultadosService) { }

  ngOnInit() {
    this.ultimoConcurso();
  }

  ultimoConcurso(){
    this.spinner = true;
    this.resultados.getQuina()
    .then(response => {
      this.quina = response;
      console.log(response);
      
      this.spinner = false;
    })
    .catch((error) => {
      Swal.fire({
        title: 'Ops !',
        text: 'Não foi possível carregar o último sorteio. Tente buscar pelo número do sorteio.',
        icon: 'error'
      })
      // console.error(error);
    });
  }

  buscarConcurso(){
    const concurso = $('#n-concurso').val();
    if (concurso === '' || concurso === null) {
      console.log('Vazio');
    }else{
      this.quinaConcurso(String(concurso));
    }
    
  }

  quinaConcurso(numero: string){
    this.spinner = true;
    this.resultados.getQuinaSorteio(numero)
    .then(response => {
      this.quina = response;
      this.spinner = false;
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
