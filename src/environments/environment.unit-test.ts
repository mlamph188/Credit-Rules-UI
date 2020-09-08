import { EndPointRelation } from '@env/endPointRelation';
import { IEnvironmentConfig } from '@env/ienvironmentConfig';

export const environment: IEnvironmentConfig = {
  production: false,
  backends: [
    {
      url: 'mocked.url',
      rel: EndPointRelation.appBackend
    }
  ],
  appInsightsInstrumentalKey: ''
};
