import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ator } from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  constructor( private http: HttpClient ) {}

  public salvar(ator: Ator): Observable<Ator> {
    const url = 'http://localhost:8080/Cinema/rest/ator/salvar';
    return this.http.post<Ator>(url, ator);
  }

  public alterar(ator: Ator): Observable<Ator> {
    const url = 'http://localhost:8080/Cinema/rest/ator/alterar';
    return this.http.put<Ator>(url, ator);
  }

  public buscarPorId(id: number): Observable<Ator> {
    const url = 'http://localhost:8080/Cinema/rest/ator/' + id;
    return this.http.get<Ator>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/ator/' + id;
    return this.http.delete(url);
  }

}
