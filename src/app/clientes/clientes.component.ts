import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  titulo = "Clientes";
  clientes: Cliente[];

  constructor(private clienteService:ClienteService){     
    this.getAll();
  }   

  getAll(): void{
    this.clienteService.getAll().subscribe(
      clientes => {this.clientes = clientes}
    );
  }  

  delete(cliente: Cliente): void{
    this.clienteService.delete(cliente.id).subscribe(
      response => this.clienteService.getAll().subscribe(res => {
        this.clientes = res
        Swal.fire('Cliente eliminado',`Cliente ${cliente.nombre} ${cliente.apellido} eliminado con éxito`, 'success');
      })
    );
  }

}
