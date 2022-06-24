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
      this.formatValor(response);
      this.megasena = response;
      this.spinner = false;
    })
    .catch(async (error) => {
      this.spinner = false;
      const { value: sorteio } = await Swal.fire({
        title:
          '<p style="font-size: 2rem; font-weight: 700; color: #000066;">Digite o número do concurso.</p>',
        icon: 'question',
        input: 'text',
        inputPlaceholder: 'Ex: 1234',
        showCloseButton: true,
        confirmButtonColor: '#209869',
        confirmButtonText: 'Buscar',
        allowOutsideClick: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      if (sorteio) {
        this.megasenaConcurso(sorteio);
      }
    });
  }

  buscarConcurso(){
    const concurso = $('#n-concurso').val();
    if (concurso === '' || concurso === null) {
      Swal.fire({
        title: '<p style="font-size: 2rem; font-weight: 700; color: #000066;">Ops !</p>',
        html: '<p style="font-size: 1.5rem; font-weight: 700; color: #000066;">Nenhum concurso foi digitado.</p>',
        icon: 'error',
        showCloseButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#209869'
      });
    }else{
      this.megasenaConcurso(String(concurso));
    }

  }

  megasenaConcurso(numero: string){
    this.spinner = true;
    this.resultados.getMegaSenaSorteio(numero)
    .then(response => {
      this.formatValor(response);
      this.megasena = response;
      $('#n-concurso').val('');
      this.spinner = false;
    })
    .catch((error) => {
      Swal.fire({
        title: '<p style="font-size: 2rem; font-weight: 700; color: #000066;">Ops !</p>',
        html: '<p style="font-size: 1.5rem; font-weight: 700; color: #000066;">Concurso não encontrado. Verifique o número digitado e tente novamente.</p>',
        icon: 'error',
        showCloseButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#209869'
      });
      this.spinner = false;
    });
  }

  formatValor(response: any) {

    for (let i = 0; i < response.listaRateioPremio.length; i++) {
      response.listaRateioPremio[i].valorPremio = response.listaRateioPremio[i].valorPremio.toLocaleString(
        'pt-br',
        { style: 'currency', currency: 'BRL' }
      );
    }

    return (
      (response.valorArrecadado = response.valorArrecadado.toLocaleString(
        'pt-br',
        { style: 'currency', currency: 'BRL' }
      )),
      (response.valorAcumuladoProximoConcurso =
        response.valorAcumuladoProximoConcurso.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })),
      (response.valorEstimadoProximoConcurso =
        response.valorEstimadoProximoConcurso.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })),
      (response.valorAcumuladoConcursoEspecial =
        response.valorAcumuladoConcursoEspecial.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }))
    );
  }

}
