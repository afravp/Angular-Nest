import { Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:'department',component:DepartmentComponent},
];
