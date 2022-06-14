import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultadosService } from '../resultados.service';

@Component({
  selector: 'app-megasena',
  templateUrl: './megasena.component.html',
  styleUrls: ['./megasena.component.scss']
})
export class MegasenaComponent implements OnInit {
  megasena: any;
  spinner: boolean = false;

  constructor(public resultados: ResultadosService) { }

  ngOnInit() {
    this.ultimoConcurso();
  }

  ultimoConcurso(){
    this.spinner = true;
    this.resultados.getMegaSena()
    .then(response => {
      this.megasena = response;
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
      this.megasenaConcurso(String(concurso));
    }
    
  }

  megasenaConcurso(numero: string){
    this.spinner = true;
    this.resultados.getMegaSenaSorteio(numero)
    .then(response => {
      this.megasena = response;
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
