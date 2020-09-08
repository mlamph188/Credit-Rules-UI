import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 /* istanbul ignore next */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        loadChildren: () => import('./credit-rules/credit-rules.module').then(m => m.CreditRulesModule)
      }
    ]
  },
  { path: '**', redirectTo: '404' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
