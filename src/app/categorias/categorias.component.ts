import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent {

  titulo = "Categorias";
  productos: Categoria[];

  constructor(private categoriaService:CategoriaService){     
    this.getAll();
  } 

  getAll(): void{
    this.categoriaService.getAll().subscribe(
      categorias => {this.productos = categorias}
    );
  }  

  delete(categoria: Categoria): void{
    this.categoriaService.delete(categoria.id).subscribe(
      response => this.categoriaService.getAll().subscribe(res => {
        this.productos = res
        Swal.fire('Categoria eliminado',`Categoria ${categoria.id} eliminado con éxito`, 'success');
      })
    );
  }

}
