import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Orden } from './orden';
import { OrdenService } from './orden.service';

@Component({
  selector: 'app-orden-ventas',
  templateUrl: './orden-ventas.component.html',
})
export class OrdenVentasComponent {
  titulo = "Ordenes";
  ordenes: Orden[];

  constructor(private ordenService:OrdenService){     
    this.getAll();
  }   

  getAll(): void{
    this.ordenService.getAll().subscribe(
      ordenes => {this.ordenes = ordenes}
    );
  }  

  delete(orden: Orden): void{
    this.ordenService.delete(orden.id).subscribe(
      response => this.ordenService.getAll().subscribe(res => {
        this.ordenes = res
        Swal.fire('Orden eliminado',`Orden ${orden.numero} eliminado con éxito`, 'success');
      })
    );
  }
}
