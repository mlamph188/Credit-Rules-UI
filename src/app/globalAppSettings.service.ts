import { Inject, Injectable } from '@angular/core';

import { IAppSettings, IAuthEndpointConfig, IGlobalAppSettings } from './core';
import { EndPointRelation } from '@env/endPointRelation';
import { ENVIRONMENT } from '@env/environment.token';
import { IEndpointConfig } from '@env/iendpointConfig';
import { IEnvironmentConfig } from '@env/ienvironmentConfig';

@Injectable()
export class GlobalAppSettingsService implements IGlobalAppSettings {
  private appSettings: IAppSettings;

  constructor( @Inject(ENVIRONMENT) environment: IEnvironmentConfig) {
    if (!environment) {
      throw new Error('No environments settings found');
    }

    // sanity check - blow up the app if the services endpoints are not present
    EndPointRelation.toArray()
      .forEach(
        (endpointDef) => {
          if (!environment.backends.find(b => b.rel === endpointDef.value)) {
            const errorMessage = `CONFIGURATION ERROR: No endpoint configured for ${endpointDef.name}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
        }
      );

    this.appSettings = {
      API_ENDPOINT: this.buildUrl(environment.backends.find(b => b.rel === EndPointRelation.appBackend)),
      AppInsightsInstrumentalKey: environment.appInsightsInstrumentalKey,
    };

  }

  get API_ENDPOINT() {
    return this.appSettings.API_ENDPOINT;
  }

  get AppInsightsInstrumentalKey() {
    return this.appSettings.AppInsightsInstrumentalKey;
  }

  /**
   * Build an URL based on the parameter
   * @param backendDefinition URL description in part like url, prefix
   */
  private buildUrl(backendDefinition: IEndpointConfig): string {
    let prefix = '';
    if (backendDefinition.prefix && backendDefinition.prefix.length !== 0) {
      prefix = `/${backendDefinition.prefix}`;
    }
    return `${backendDefinition.url}${prefix}`;
  }

  /**
   * Build configuration for an AuthEndpoint
   * @param backendDefinition URL description in part like url, prefix
   */
  private buildAuthEndpoint(backendDefinition: IEndpointConfig): IAuthEndpointConfig {
    return {
      url: this.buildUrl(backendDefinition),
      redirectUrl: backendDefinition.redirectUrl
    };
  }
}
