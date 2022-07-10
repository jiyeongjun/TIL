interface iteratee {
  (el: any): any;
}
interface isRegExp {}
declare module "lodash" {
  function head<T>(array: Array<T>): any;
  function hasIn(object: object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(string: string, separator: isRegExp | string): Array<string>;
  function hasPath<T>(object: object, path: Array<T> | string): boolean;
  function filter(array: Array<any>, predicate: iteratee): Array<any>;
  function every<T>(array: Array<T>, predicate: Function): boolean;
  function map(array: Array<any>, iteratee: iteratee): Array<any>;
}
