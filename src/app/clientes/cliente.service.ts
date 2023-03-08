import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = "http://localhost:8080/api/clientes";
  private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});

  constructor(private http:HttpClient) { }

  // Listar clientes del backend
  getAll() : Observable<Cliente[]> {    
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }
  
  //obtener el id del cliente
  getCliente(id:any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  // Crear cliente en el backend
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  // Eliminar cliente en el backend
  delete(id:any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`);
  }


}
