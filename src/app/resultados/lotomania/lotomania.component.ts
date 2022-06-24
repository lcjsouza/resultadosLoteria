import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.component.html',
  styleUrls: ['./lotomania.component.scss'],
})
export class LotomaniaComponent implements OnInit {
  lotomania: any;
  spinner: boolean = false;

  constructor(public resultados: ResultadosService) {}

  ngOnInit(): void {
    this.ultimoConcurso();
  }

  ultimoConcurso() {
    this.spinner = true;
    this.resultados.getLotomania()
    .then((response) => {
      this.formatValor(response);
      this.lotomania = response;
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
        confirmButtonColor: '#F78100',
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
        this.lotomaniaConcurso(sorteio);
      }
    });
  }

  buscarConcurso() {
    const concurso = $('#n-concurso').val();
    if (concurso === '' || concurso === null) {
      Swal.fire({
        title:
          '<p style="font-size: 2rem; font-weight: 700; color: #000066;">Ops !</p>',
        html: '<p style="font-size: 1.5rem; font-weight: 700; color: #000066;">Nenhum concurso foi digitado.</p>',
        icon: 'error',
        showCloseButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#F78100',
      });
    } else {
      this.lotomaniaConcurso(String(concurso));
    }
  }

  lotomaniaConcurso(numero: string) {
    this.spinner = true;
    this.resultados
      .getLotomaniaSorteio(numero)
      .then((response) => {
        this.formatValor(response);
        this.lotomania = response;
        $('#n-concurso').val('');
        this.spinner = false;
      })
      .catch((error) => {
        this.spinner = false;
        Swal.fire({
          title:
            '<p style="font-size: 2rem; font-weight: 700; color: #000066;">Ops !</p>',
          html: '<p style="font-size: 1.5rem; font-weight: 700; color: #000066;">Concurso não encontrado. Verifique o número digitado e tente novamente.</p>',
          icon: 'error',
          showCloseButton: true,
          allowOutsideClick: false,
          confirmButtonColor: '#F78100',
        });
        console.error(error);
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
