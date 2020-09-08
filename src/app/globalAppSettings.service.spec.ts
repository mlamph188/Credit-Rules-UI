import { EndPointRelation } from '../environments/endPointRelation';
import { IEnvironmentConfig } from '../environments/ienvironmentConfig';
import { GlobalAppSettingsService } from './globalAppSettings.service';

describe('Configuration: GlobalAppSettings', () => {
  let devConfig: IEnvironmentConfig;

  beforeEach(() => {
    devConfig = {
      production: true,
      backends: [
        {
          url: 'https://mocked/App.Api',
          prefix: 'api/v1',
          rel: EndPointRelation.appBackend
        }
      ],
      appInsightsInstrumentalKey: 'appInsightsInstrumentalKey'
    };
  });

  it('should construct a proper app api endpoint', () => {
    const config = new GlobalAppSettingsService(devConfig);
    expect(config.API_ENDPOINT).toEqual('https://mocked/App.Api/api/v1');
  });

  it('should construct a proper app config for appsettings', () => {
    const config = new GlobalAppSettingsService(devConfig);
    expect(config.AppInsightsInstrumentalKey).toEqual('appInsightsInstrumentalKey');
  });

  it('should blew up you user didnt provided a endpois for app backend', () => {
    devConfig.backends = []; // remove appBackend endpoint
    expect(() => new GlobalAppSettingsService(devConfig)).toThrowError('CONFIGURATION ERROR: No endpoint configured for appBackend');
  });

  it('should blew up if no config is given', () => {
    expect(() => new GlobalAppSettingsService(null)).toThrowError('No environments settings found');
  });
});
