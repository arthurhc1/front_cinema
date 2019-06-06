import { FilmeAtor } from './../model/filmeator';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeatorService {

  constructor( private http: HttpClient ) { }

  public salvar(filmeAtor: FilmeAtor): Observable<FilmeAtor> {
    const url = 'http://localhost:8080/Cinema/rest/filmeAtor/salvar';
    return this.http.post<FilmeAtor>(url, filmeAtor);
  }

  public alterar(filmeAtor: FilmeAtor): Observable<FilmeAtor> {
    const url = 'http://localhost:8080/Cinema/rest/filmeAtor/alterar';
    return this.http.put<FilmeAtor>(url, filmeAtor);
  }

  public buscar(id: number): Observable<FilmeAtor> {
    const url = 'http://localhost:8080/Cinema/rest/filmeAtor/' + id;
    return this.http.get<FilmeAtor>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/filmeAtor/' + id;
    return this.http.delete(url);
  }
}
