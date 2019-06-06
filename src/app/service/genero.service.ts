import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Genero } from '../model/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor( private http: HttpClient ) { }

  public salvar(genero: Genero): Observable<Genero> {
    const url = 'http://localhost:8080/Cinema/rest/genero/salvar';
    return this.http.post<Genero>(url, genero);
  }

  public buscar(id: number): Observable<Genero> {
    const url = 'http://localhost:8080/Cinema/rest/genero/buscar/' + id;
    return this.http.get<Genero>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/genero/' + id;
    return this.http.delete(url);
  }

  public alterar(genero: Genero): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/genero/';
    return this.http.put(url, genero);
  }
}
