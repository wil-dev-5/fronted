import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html'
})
export class FormProductoComponent {
  public titulo:string = 'Crear Producto';
  public producto:Producto = new Producto();

  constructor(private productoService:ProductoService, private router:Router, private activatedRoute:ActivatedRoute){
    this.cargarProducto();
  }
  
cargarProducto(): void{
  this.activatedRoute.params.subscribe(params =>{
    let id = params['id'];
    if(id){
      this.productoService.getProducto(id).subscribe((producto) => this.producto = producto);
    }
  });
}

public create(): void{
    this.productoService.create(this.producto).subscribe(producto => {
      this.router.navigate(['/productos'])
      Swal.fire('Producto guardado',`Producto ${producto.nombre} guardado con éxito`, 'success');
    });
  }
}
