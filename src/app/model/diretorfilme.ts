import { Filme } from './filme';
import { Diretor } from './diretor';

export class DiretorFilme {
  public id: number;
  public idDiretor: number;
  public idFilme: number;
  public diretor: Diretor;
  public filme: Filme;
}
