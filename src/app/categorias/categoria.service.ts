import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    private urlEndPoint:string = "http://localhost:8080/api/categorias";
    private httpHeaders = new  HttpHeaders({'Content-Type': 'Application/json'});
  
    constructor(private http:HttpClient) { }
  
    getAll() : Observable<Categoria[]> {    
      return this.http.get(this.urlEndPoint).pipe(
        map(response => response as Categoria[])
      );
    }
    
    getCategoria(id:any): Observable<Categoria> {
      return this.http.get<Categoria>(`${this.urlEndPoint}/${id}`);
    }
  
    create(categoria: Categoria): Observable<Categoria> {
      return this.http.post<Categoria>(this.urlEndPoint, categoria, {headers: this.httpHeaders});
    }
  
    delete(id:any): Observable<Categoria> {
      return this.http.delete<Categoria>(`${this.urlEndPoint}/${id}`);
    }
    
}
