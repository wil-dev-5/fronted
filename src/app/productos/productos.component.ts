import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent {
  titulo = "Productos";
  productos: Producto[];

  constructor(private productoService:ProductoService){     
    this.getAll();
  }   

  getAll(): void{
    this.productoService.getAll().subscribe(
      productos => {this.productos = productos}
    );
  }  

  delete(producto: Producto): void{
    this.productoService.delete(producto.id).subscribe(
      response => this.productoService.getAll().subscribe(res => {
        this.productos = res
        Swal.fire('Producto eliminado',`Producto ${producto.nombre} eliminado con éxito`, 'success');
      })
    );
  }
}
