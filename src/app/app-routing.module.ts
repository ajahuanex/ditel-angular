import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { TreeComponent } from './components/tree/tree.component';

const routes: Routes = [
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path: 'form', component:FormComponent
  },
  {
    path:'localidades',component:LocalidadesComponent
  },
  {
    path:'tree', component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
