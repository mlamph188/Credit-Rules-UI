import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  Injector,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import { AppInsightsService } from 'ng-appinsights';
import { AppEndPoints } from './appEndPoints.service';
import { APPSETTINGS, IGlobalAppSettings } from './IAppSettings';
import { WindowRefService } from './window-ref/window-ref.service';

/*
* Core module, should be called .forRoot on the AppModule.
* App module has to provide a service of type IGlobalAppSettings (for injecting application settings)
*/
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        WindowRefService,
        {
          provide: AppEndPoints,
          useFactory: GlobalAppEndPointsServiceFactory,
          deps: [IGlobalAppSettings]
        },
        { provide: APPSETTINGS, useExisting: IGlobalAppSettings },
        {
          provide: APP_INITIALIZER,
          useFactory: InitializeAppInsights,
          multi: true,
          deps: [Injector]
        }
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}

export function InitializeAppInsights(injector: Injector): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve) => {
      const appInsightsService = injector.get(AppInsightsService);
      const settings: IGlobalAppSettings = injector.get(APPSETTINGS);
      if (appInsightsService && settings && !!settings.AppInsightsInstrumentalKey) {
        appInsightsService.init({
          instrumentationKey: settings.AppInsightsInstrumentalKey
        });
      }
      resolve();
    });
  };
}

export function GlobalAppEndPointsServiceFactory(settings: IGlobalAppSettings) {
  return new AppEndPoints(settings);
}
