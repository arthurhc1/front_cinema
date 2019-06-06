import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  public logar( email, senha): Observable<Usuario> {
    let user = { email: email, senha: senha };
    const url = 'http://localhost:8080/Cinema/rest/usuario/logar';
    return this.http.post<Usuario>(url, user);

  }

  public salvar(usuario: Usuario): Observable<Usuario> {
    const url = 'http://localhost:8080/Cinema/rest/usuario/salvar';
    return this.http.post<Usuario>(url, usuario);
  }

  public buscar(id: number): Observable<Usuario> {
    const url = 'http://localhost:8080/Cinema/rest/usuario/buscar/' + id;
    return this.http.get<Usuario>(url);
  }

  public excluir(id: number): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/usuario/' + id;
    return this.http.delete(url);
  }

  public alterar(usuario: Usuario): Observable<any> {
    const url = 'http://localhost:8080/Cinema/rest/usuario/';
    return this.http.put(url, usuario);
  }
}
