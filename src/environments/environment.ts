import { EndPointRelation } from './endPointRelation';
import { IEnvironmentConfig } from './ienvironmentConfig';

export const environment: IEnvironmentConfig = {
  production: false,
  backends: [
    {
      url: 'https://sample-api.eshopworld.net',
      prefix: 'api/v1',
      rel: EndPointRelation.appBackend
    }
    // you can add more backend definitions here, make sure you add a new corresponding EndPointRelation value
  ]
  // leave appInsights blank for development
  // appInsightsInstrumentalKey: '{{put appInsight key here}}',
};
