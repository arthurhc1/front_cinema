import { Filme } from './filme';
import { Usuario } from './usuario';

export class Sessao {
  public id: number;
  public sala: number;
  public idfilme: number;
  public numeroVagas: number;
  public dataHoraInicio: Date;
  public modalidade: string;
  public filme: Filme;
  public usuario: Usuario;
}
