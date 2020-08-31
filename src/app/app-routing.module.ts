import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesFormComponent } from './master-data/employees/employees-form/employees-form.component';
import { BranchOfficeFormComponent } from './master-data/branch-offices/branch-office-form/branch-office-form.component';
import { BranchOfficesComponent } from './master-data/branch-offices/branch-offices/branch-offices.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeesFormComponent,
  },
  {
    path: 'branch-office/add',
    component: BranchOfficeFormComponent,
  },
  {
    path: 'branch-offices',
    component: BranchOfficesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
