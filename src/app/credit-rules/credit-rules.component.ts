import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'esw-main',
  templateUrl: './credit-rules.component.html',
  styleUrls: ['./credit-rules.component.scss']
})
export class CreditRulesComponent implements OnInit {

  creditRulesForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {

    this.initForm();

  }

  private initForm() {

    const countryCreditRules = this.formBuilder.array([]);
    this.creditRulesForm = this.formBuilder.group({
        'brand': [0],
        'countryCreditRules': countryCreditRules }
      );

  }

  public addCreditRulesRow() {
    this.getCountryCreditRulesFormArray.push(
      new FormGroup({
        'countryIso': new FormControl(null),
        'creditTypeId': new FormControl(null),
        'returnFee': new FormControl(null),
        'isMerchandizeRefundable': new FormControl(null),
        'isValueAddedServiceRefunadble': new FormControl(null),
        'isMerchandizeDutyRefundable': new FormControl(null),
        'isMerchandizeTaxRefundable': new FormControl(null),
        'iShippingRefundable': new FormControl(null),
        'isShippingDutyRefundable': new FormControl(null),
        'isShippingTaxRefundable': new FormControl(null),
        'isOtherTaxesRefundable': new FormControl(null),
        'isOtherFeesRefundable': new FormControl(null),
        'isInternationalServiceFeeRefundable': new FormControl(null),
        'isAdminFeeAmountRefundable': new FormControl(null)
      })
    );
  }

  get countryCreditRulesControls() {
    return this.creditRulesForm['controls']['countryCreditRules']['controls'];
  }

  get getCountryCreditRulesFormArray() {
    return <FormArray>this.creditRulesForm.get('countryCreditRules');
  }

}
