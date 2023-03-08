import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';


@Component({
  selector: 'app-registro',
  templateUrl: './form-registro.component.html'
})
export class FormRegistroComponent {
  public titulo:string = 'Crear Cliente';
  public cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute:ActivatedRoute){
    this.cargarCliente();
  }
  
  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire('Usuario cliente guardado',`Usuario cliente ${cliente.nombre} guardado con éxito`, 'success');
    });
  }
}
