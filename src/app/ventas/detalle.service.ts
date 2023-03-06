import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Detalle } from './detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private urlEndPoint:string = "http://localhost:8080/api/detalles";
  private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});

  constructor(private http:HttpClient) { }

  getAll() : Observable<Detalle[]> {    
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Detalle[])
    );
  }
  
  getDetalle(id:any): Observable<Detalle> {
    return this.http.get<Detalle>(`${this.urlEndPoint}/${id}`);
  }

  create(detalle: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.urlEndPoint, detalle, {headers: this.httpHeaders});
  }

  delete(id:any): Observable<Detalle> {
    return this.http.delete<Detalle>(`${this.urlEndPoint}/${id}`);
  }
}
