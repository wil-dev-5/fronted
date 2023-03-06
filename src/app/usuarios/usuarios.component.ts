import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  titulo = "Usuarios";
  usuarios: Usuario[];

  constructor(private usuarioService:UsuarioService){     
    this.getAll();
  }   

  getAll(): void{
    this.usuarioService.getAll().subscribe(
      usuarios => {this.usuarios = usuarios}
    );
  }  

  delete(usuario: Usuario): void{
    this.usuarioService.delete(usuario.id).subscribe(
      response => this.usuarioService.getAll().subscribe(res => {
        this.usuarios = res
        Swal.fire('Usuario eliminado',`Usuario ${usuario.nombre} ${usuario.apellido} eliminado con éxito`, 'success');
      })
    );
  }

}
