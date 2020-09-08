import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreditRulesComponent } from './credit-rules.component';

 /* istanbul ignore next */
 const routes: Routes = [
  {
    path: '',
    component: CreditRulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRulesRoutingModule {}

export const routedComponents = [CreditRulesComponent];


