import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-cliente.component.html'
})
export class FormClienteComponent {

  public titulo:string = 'Crear Cliente';
  public cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute:ActivatedRoute){
    this.cargarCliente();
  }
  
// cargar el cliente segun su id 
cargarCliente(): void{
  this.activatedRoute.params.subscribe(params =>{
    let id = params['id'];
    if(id){
      this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
    }
  });
}

  // crea el cliente, guarda y retorna a /clientes
  public create(): void{
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire('Cliente guardado',`Cliente ${cliente.nombre} guardado con éxito`, 'success');
    });
  }

}
