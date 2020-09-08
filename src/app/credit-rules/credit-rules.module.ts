import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditRulesComponent } from './credit-rules.component';
import { CreditRulesRoutingModule } from './credit-rules.routing.module';

@NgModule({
  imports: [
    CreditRulesRoutingModule,
    CommonModule
  ],
  providers: [],
  declarations: [CreditRulesComponent]
})
export class CreditRulesModule {}
