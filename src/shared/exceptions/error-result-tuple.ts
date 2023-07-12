import { GenericError } from './exception';

export type ErrorAndNull = Readonly<[GenericError, null]>;
export type NullAndResult<T> = Readonly<[null, T]>;
export type ErrorResultTuple<T> = ErrorAndNull | NullAndResult<T>;


