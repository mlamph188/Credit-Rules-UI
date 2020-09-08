import { InjectionToken } from '@angular/core';

export interface IAppSettings {
  API_ENDPOINT: string;

  AppInsightsInstrumentalKey: string;
}

export interface IAuthEndpointConfig {
  url: string;
  redirectUrl: string;
}

export abstract class IGlobalAppSettings implements IAppSettings {
  abstract get API_ENDPOINT(): string;

  // Add other api endpoint getters
  abstract get AppInsightsInstrumentalKey(): string;
}

export const APPSETTINGS = new InjectionToken<IGlobalAppSettings>(
  'Global application settings'
);
