import { IEndpointConfig } from './iendpointConfig';

export interface IEnvironmentConfig {
  production: boolean;

  backends: IEndpointConfig[];

  appInsightsInstrumentalKey?: string;

  // to import something only needed in certain environments and tree-shaking cant take it off
  imports?: any[];

}
