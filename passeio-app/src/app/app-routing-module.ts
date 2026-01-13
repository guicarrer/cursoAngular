import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPage} from './landing-page/landing-page';
import {authGuard} from './auth-guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule),
    canActivate: [ authGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
