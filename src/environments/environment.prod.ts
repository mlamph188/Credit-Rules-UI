import { EndPointRelation } from './endPointRelation';
import { IEnvironmentConfig } from './ienvironmentConfig';

export const environment: IEnvironmentConfig = {
  production: true,
  backends: [
    {
      url: '#{backendApiUrl}',
      prefix: '#{backendPrefix}',
      rel: EndPointRelation.appBackend
    }
  ],

  appInsightsInstrumentalKey: '#{appInsights}'
};
