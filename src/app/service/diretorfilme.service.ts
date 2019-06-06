import { DiretorFilme } from './../model/diretorfilme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorfilmeService {

  constructor( private http: HttpClient ) { }

  public salvar(diretorFilme: DiretorFilme): Observable<DiretorFilme> {
    const url = 'http://localhost:8080/Cinema/rest/diretorFilme/salvar';
    return this.http.post<DiretorFilme>(url, diretorFilme);
  }

  public alterar(diretorFilme: DiretorFilme): Observable<DiretorFilme> {
    const url = 'http://localhost:8080/Cinema/rest/diretorFilme/alterar';
    return this.http.put<DiretorFilme>(url, DiretorFilme);
  }

  public buscarPorId(id: number): Observable<DiretorFilme> {
    const url = 'http://localhost:8080/Cinema/rest/diretorFilme/' + id;
    return this.http.get<DiretorFilme>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/diretorFilme/' +  id;
    return this.http.delete(url);
  }
}
