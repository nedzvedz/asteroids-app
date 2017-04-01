import { Asteroid } from '../interfaces/asteroid';

export interface ApplicationState {
  asteroids: Array<Asteroid>,
  currentAsteroid: { id: string | void }
}
