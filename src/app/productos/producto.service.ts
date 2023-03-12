import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Producto } from "./producto";

@Injectable({
    providedIn: 'root'
  })
export class ProductoService {
  
    private urlEndPoint:string = "http://localhost:8080/api/productos";
    private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});
  
    constructor(private http:HttpClient) { }
  
    getAll() : Observable<Producto[]> {    
      return this.http.get(this.urlEndPoint).pipe(
        map(response => response as Producto[])
      );
    }
    
    getProducto(id:any): Observable<Producto> {
      return this.http.get<Producto>(`${this.urlEndPoint}/${id}`);
    }
  
    create(producto: Producto): Observable<Producto> {
      return this.http.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
    }
  
    delete(id:any): Observable<Producto> {
      return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`);
    }
    
}
