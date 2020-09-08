import { InjectionToken } from '@angular/core';
import { IEnvironmentConfig } from './ienvironmentConfig';

export const ENVIRONMENT = new InjectionToken<IEnvironmentConfig>('environment');
