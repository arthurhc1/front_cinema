import { Sessao } from './sessao';

export class Ticket {
  public id: number;
  public idUsuario: number;
  public idSessao: number;
  public numCartao: string;
  public cvv: string;
  public numPoltrona: number;
  public filaPoltrona: string;
  public tipoTicket: string;
  public dataTicket: Date;
  public sessao: Sessao;
}
