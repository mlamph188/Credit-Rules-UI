import {Injectable} from '@angular/core';
import { IGlobalAppSettings, IAuthEndpointConfig } from './IAppSettings';

@Injectable()
export class AppEndPoints {
  constructor(private settings: IGlobalAppSettings) { }

  public get API_ENDPOINT(): string {
    return this.settings.API_ENDPOINT;
  }


}
