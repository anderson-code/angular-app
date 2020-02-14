import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClienteCadastroComponent } from 'src/app/cliente/clientes-form/clientes-form.component';
import { ClienteListComponent } from 'src/app/cliente/clientes-list/clientes-list.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
},

{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'clientes-form',
  component: ClienteCadastroComponent,
},

{
  path: 'clientes-list',
  component: ClienteListComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
