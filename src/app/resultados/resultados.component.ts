import { Component, OnInit } from '@angular/core';
import { ResultadosService } from './resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  constructor(public resultados: ResultadosService) { }

  ngOnInit(): void {
    this.resultados.getLotofacil()
    .then(response => console.log(response))
    .catch(error => console.error(error)
    )
  }

}
