export class Cliente {
    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    endereco:Endereco = new Endereco();
    telefone: string;
    celular: string;
    email: string;
    quantidadePDV: number;
    valorPorPDV: number;
    periodoDeRenovacao: number;
    inicioVigencia: Date;
    vencimentoLicenca: Date;
  }

  export class Endereco {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    municipio: string;
    estado: string;
  }
