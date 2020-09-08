import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGlobalAppSettings } from '@app/core';
import { GlobalAppSettingsService } from '@app/globalAppSettings.service';

import { environment } from '@env/environment';
import { ENVIRONMENT } from '@env/environment.token';

@NgModule({
  imports: [CommonModule, NoopAnimationsModule, RouterTestingModule],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    { provide: IGlobalAppSettings, useClass: GlobalAppSettingsService }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestModule {}
