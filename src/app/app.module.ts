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
import { CarritoComponent } from './ventas/carrito.component';
import { DetalleVentasComponent } from './ventas/detalle-ventas.component';
import { OrdenVentasComponent } from './ventas/orden-ventas.component';
import { ComprasComponent} from './ventas/compras.component';
import { VerProductoComponent } from './productos/ver-producto.component';


const RUTAS: Routes = [
 // {path:'', redirectTo:'', pathMatch:'full', component:ProductosComponent},
  {path:'', component: HomeProductoComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form-clientes', component: FormClienteComponent},
  {path:'clientes/form-clientes/:id', component: FormClienteComponent},
  {path:'productos', component: ProductosComponent},
  {path:'productos/form-productos', component: FormProductoComponent},
  {path:'productos/form-productos/:id', component: FormProductoComponent},
  {path:'productos/ver-producto', component: VerProductoComponent},
  {path:'ventas/carrito', component: CarritoComponent},
  {path:'ventas/compras', component: ComprasComponent},
  

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
    CarritoComponent,
    ComprasComponent,
    DetalleVentasComponent,
    OrdenVentasComponent,
    VerProductoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(RUTAS)
  ],
  providers: [ClienteService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
