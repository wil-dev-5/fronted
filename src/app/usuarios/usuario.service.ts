import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string = "http://localhost:8080/api/usuarios";
  private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});

  constructor(private http:HttpClient) { }

  getAll() : Observable<Usuario[]> {    
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }
  
  getUsuario(id:any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, {headers: this.httpHeaders});
  }

  delete(id:any): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`);
  }

}
