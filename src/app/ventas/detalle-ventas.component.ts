import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Detalle } from './detalle';
import { DetalleService } from './detalle.service';

@Component({
  selector: 'app-detalle-ventas',
  templateUrl: './detalle-ventas.component.html',
})
export class DetalleVentasComponent {
  titulo = "Detalles";
  detalles: Detalle[];

  constructor(private detalleService:DetalleService){     
    this.getAll();
  }   

  getAll(): void{
    this.detalleService.getAll().subscribe(
      detalles => {this.detalles = detalles}
    );
  }  

  delete(detalle: Detalle): void{
    this.detalleService.delete(detalle.id).subscribe(
      response => this.detalleService.getAll().subscribe(res => {
        this.detalles = res
        Swal.fire('Detalle eliminado',`Detalle ${detalle.nombre}  eliminado con éxito`, 'success');
      })
    );
  }
}
