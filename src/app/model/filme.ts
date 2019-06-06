import { Genero } from './genero';
import { Produtora } from './produtora';

export class Filme {
  public id: number;
  public nome: string;
  public sinopse: string;
  public idGenero: Genero;
  public tempoDuracao: number;
  public idioma: string;
  public idProdutora: Produtora;
  public genero: Genero;
  public produtora: Produtora;
}
