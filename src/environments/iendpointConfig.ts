import { EndPointRelation } from './endPointRelation';

export interface IEndpointConfig {
  url: string;
  prefix?: string;
  redirectUrl?: string;
  rel: EndPointRelation;
}
