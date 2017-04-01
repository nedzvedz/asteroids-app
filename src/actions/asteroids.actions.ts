import { Asteroid } from '../interfaces/asteroid';
import { Action } from '../interfaces/action';

export const actionTypes = {
  SET_ASTEROIDS: 'SET_ASTEROIDS'
};

export function setAsteroids(asteroids: Array<Asteroid>): Action {
  return {
    type: actionTypes.SET_ASTEROIDS,
    payload: asteroids
  };
}
