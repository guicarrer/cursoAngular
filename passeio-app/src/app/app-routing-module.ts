import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPage} from './landing-page/landing-page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
