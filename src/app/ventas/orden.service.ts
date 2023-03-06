import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private urlEndPoint:string = "http://localhost:8080/api/ordenes";
  private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});

  constructor(private http:HttpClient) { }

  getAll() : Observable<Orden[]> {    
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Orden[])
    );
  }
  
  getOrden(id:any): Observable<Orden> {
    return this.http.get<Orden>(`${this.urlEndPoint}/${id}`);
  }

  create(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.urlEndPoint, orden, {headers: this.httpHeaders});
  }

  delete(id:any): Observable<Orden> {
    return this.http.delete<Orden>(`${this.urlEndPoint}/${id}`);
  }
}
