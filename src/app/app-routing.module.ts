import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClienteCadastroComponent } from 'src/app/cliente/clientes-form/clientes-form.component';
import { ClienteListComponent } from 'src/app/cliente/clientes-list/clientes-list.component';
import { LoginComponent } from './login/login.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutComponent } from './layout/layout.component';






// const routes: Routes = [{
//   path: '',
//   component: DashboardComponent,
// },

// {
//   path: 'home',
//   component: HomeComponent,
// },

// {
//   path: 'clientes-form',
//   component: ClienteCadastroComponent,
// },

// {
//   path: 'clientes-list',
//   component: ClienteListComponent,
// },

// {
//   path: 'login',
//   component: LoginComponent,
// },


// ];


export const routes: Routes = [
  {
      path: '',                       
      component: LayoutComponent,
      // canActivate: [AuthGuard], 
      children: [
          {path: 'clientes-form', component: ClienteCadastroComponent},
          {path: 'clientes-list', component: ClienteListComponent},
          {path: '**', redirectTo: 'pagina-nao-encontrada' }
      ]
  },
  {
      path: '',                       
      component: LayoutLoginComponent,
      children: [
          {path: 'login', component: LoginComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
