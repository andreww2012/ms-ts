import type {AllUnits, Ms} from './ms';

export const ms = <S extends `${number}${AllUnits}`>(milliseconds: Ms<S>) => milliseconds;

export type {Ms, AllUnits} from './ms';
