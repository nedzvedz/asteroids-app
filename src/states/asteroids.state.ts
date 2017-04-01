import { Asteroid } from '../interfaces/asteroid';

export interface AsteroidsState extends Array<Asteroid> {}

export const initialAsteroidsState: AsteroidsState = [];
