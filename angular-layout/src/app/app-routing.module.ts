import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from 'src/app/develop/test1/test1.component';
import { Test2Component } from 'src/app/develop/test2/test2.component';
import { Test3Component } from 'src/app/develop/test3/test3.component';
import { Test4Component } from 'src/app/develop/test4/test4.component';
import { Test5Component } from 'src/app/develop/test5/test5.component';
import { Test6Component } from 'src/app/develop/test6/test6.component';

const routes: Routes = [
  { path: '', redirectTo: '/test3', pathMatch: 'full' },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
  { path: 'test4', component: Test4Component },
  { path: 'test5', component: Test5Component },
  { path: 'test6', component: Test6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
