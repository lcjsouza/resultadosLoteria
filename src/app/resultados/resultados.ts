export interface ResultadosInterface {
    dataApuracao: string,
    dataProximoConcurso: string,
    listaDezenas: any[],
    numero: number,
    numeroConcursoProximo: number,
    listaRateioPremio: ListarPremios[],
    valorArrecadado: number,
    valorAcumuladoProximoConcurso: number,
    valorEstimadoProximoConcurso: number,
    tipoJogo: string
  }

  export interface ListarPremios {
    descricaoFaixa: string,
    numeroDeGanhadores: number,
    valorPremio: number
  }
