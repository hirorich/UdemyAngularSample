import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from 'src/app/develop/test1/test1.component';

const routes: Routes = [
  { path: '', redirectTo: '/test1', pathMatch: 'full' },
  { path: 'test1', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
