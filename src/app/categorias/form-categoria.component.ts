import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html'
})
export class FormCategoriaComponent {

  public titulo:string = 'Crear Categoria';
  public categoria:Categoria = new Categoria();

  constructor(private categoriaService:CategoriaService, private router:Router, private activatedRoute:ActivatedRoute){
    this.cargarCategoria();
  }
  
  cargarCategoria(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.categoriaService.getCategoria(id).subscribe((categoria) => this.categoria = categoria);
      }
    });
  }

  public create(): void{
      this.categoriaService.create(this.categoria).subscribe(categoria => {
        this.router.navigate(['/categorias'])
        Swal.fire('Categoria guardado',`Categoria ${categoria.genero} guardado con éxito`, 'success');
      });
  }

}
