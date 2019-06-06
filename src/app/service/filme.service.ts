import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../model/filme';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor( private http: HttpClient ) { }

  public salvar(filme: Filme): Observable<Filme> {
    const url = 'http://localhost:8080/Cinema/rest/filme/salvar';
    return this.http.post<Filme>(url, filme);
  }

  public alterar(filme: Filme): Observable<Filme> {
    const url = 'http://localhost:8080/Cinema/rest/filme/alterar';
    return this.http.put<Filme>(url, filme);
  }

  public buscarPorId(id: number): Observable<Filme> {
    const url = 'http://localhost:8080/Cinema/rest/filme/' + id;
    return this.http.get<Filme>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/filme/' +  id;
    return this.http.delete(url);
  }
}
