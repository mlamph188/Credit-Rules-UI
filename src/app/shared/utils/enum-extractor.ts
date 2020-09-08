export class EnumExtractor {
  /* *
   * Extracts an array of pairs  { name:string, value: T }
   * @param T Enum Type to extract pair name: value
   */
  static toArray<T /*extends enum*/>(T): { name: string, value: T}[] {
    return Object.keys(T).filter( property => typeof T[property] === 'number')
                .map( propertyName => ({name: propertyName, value: T[propertyName] }));
  }
}
