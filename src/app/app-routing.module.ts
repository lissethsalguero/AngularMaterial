import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesFormComponent } from './master-data/employees/employees-form/employees-form.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
