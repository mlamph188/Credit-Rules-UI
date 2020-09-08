import { EndPointRelation } from '../environments/endPointRelation';
import { IEnvironmentConfig } from '../environments/ienvironmentConfig';

export const environment: IEnvironmentConfig = {
  production: false,
  backends: [
    {
      url: 'mocked.url',
      rel: EndPointRelation.appBackend
    }
  ],
  appInsightsInstrumentalKey: 'appInsightsInstrumentalKey'
};
