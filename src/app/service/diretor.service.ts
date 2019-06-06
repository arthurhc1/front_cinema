import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diretor } from '../model/diretor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  constructor( private http: HttpClient ) { }

  public salvar(diretor: Diretor): Observable<Diretor> {
    const url = 'http://localhost:8080/Cinema/rest/diretor/salvar';
    return this.http.post<Diretor>(url, diretor);
  }

  public alterar(diretor: Diretor): Observable<Diretor> {
    const url = 'http://localhost:8080/Cinema/rest/diretor/alterar';
    return this.http.put<Diretor>(url, diretor);
  }

  public buscarPorId(id: number): Observable<Diretor> {
    const url = 'http://localhost:8080/Cinema/rest/diretor/' + id;
    return this.http.get<Diretor>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/diretor/' +  id;
    return this.http.delete(url);
  }

}
