import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditRulesComponent } from './credit-rules.component';
import { CreditRulesRoutingModule } from './credit-rules.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CreditRulesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,

  ],
  providers: [],
  declarations: [CreditRulesComponent]
})
export class CreditRulesModule {}
