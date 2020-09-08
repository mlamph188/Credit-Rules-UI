import { EnumExtractor } from '@app/shared/utils';

export enum EndPointRelation  {
  appBackend,
}
// tslint:disable-next-line: no-namespace
export namespace EndPointRelation {
  export function toArray(): {name: string, value: EndPointRelation}[] {
    return EnumExtractor.toArray<EndPointRelation>(EndPointRelation);
  }
}
