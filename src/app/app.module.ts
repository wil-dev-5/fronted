import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormClienteComponent } from './clientes/form-cliente.component';
import { ClienteService } from './clientes/cliente.service';
import { FormsModule } from '@angular/forms';
import { FormProductoComponent } from './productos/form-producto.component';
import { ProductoService } from './productos/producto.service';
import { HomeProductoComponent } from './productos/home-producto.component';
import { DetalleVentasComponent } from './ventas/detalle-ventas.component';
import { OrdenVentasComponent } from './ventas/orden-ventas.component';
import { ComprasComponent} from './ventas/compras.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormIngresoComponent } from './usuarios/form-ingreso.component';
import { FormRegistroComponent } from './usuarios/form-registro.component';
import { UsuarioService } from './usuarios/usuario.service';
import { DetalleService } from './ventas/detalle.service';
import { OrdenService } from './ventas/orden.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaService } from './categorias/categoria.service';
import { FormCategoriaComponent } from './categorias/form-categoria.component';


const RUTAS: Routes = [
 // {path:'', redirectTo:'', pathMatch:'full', component:ProductosComponent},
  {path:'', component: HomeProductoComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form-clientes', component: FormClienteComponent},
  {path:'clientes/form-clientes/:id', component: FormClienteComponent},
  {path:'productos', component: ProductosComponent},
  {path:'productos/form-productos', component: FormProductoComponent},
  {path:'productos/form-productos/:id', component: FormProductoComponent},
  {path:'productos', component: CategoriasComponent},
  {path:'productos/form-productos', component: FormCategoriaComponent},
  {path:'productos/form-productos/:id', component: FormCategoriaComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'categorias/form-categorias', component: FormCategoriaComponent},
  {path:'categorias/form-categorias/:id', component: FormCategoriaComponent},
  {path:'ventas/ordenes', component: OrdenVentasComponent},
  {path:'ventas/detalles', component: DetalleVentasComponent},
  {path:'ventas/compras', component: ComprasComponent},
  {path:'usuarios/form-ingreso', component: FormIngresoComponent},
  {path:'usuarios/form-registro', component: FormRegistroComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    FormClienteComponent,
    FormProductoComponent,
    HomeProductoComponent,
    ComprasComponent,
    DetalleVentasComponent,
    OrdenVentasComponent,
    UsuariosComponent,
    FormIngresoComponent,
    FormRegistroComponent,
    UsuariosComponent,
    CategoriasComponent,
    FormCategoriaComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(RUTAS)
  ],
  providers: [ClienteService, ProductoService, UsuarioService, DetalleService, OrdenService, CategoriaService],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
