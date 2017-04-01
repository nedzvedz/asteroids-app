import { Asteroid } from '../interfaces/asteroid';
import { Action } from '../interfaces/action';
import asteroidsService from '../services/asteroids.service';

export const actionTypes = {
  SET_ASTEROIDS: 'SET_ASTEROIDS'
};

export function getAsteroids() {
  return (dispatch: any) => {
    asteroidsService.getAsteroids()
      .then((asteroids) => {
        dispatch(setAsteroids(<any>asteroids));
      })
  }
}

export function setAsteroids(asteroids: Array<Asteroid>): Action {
  return {
    type: actionTypes.SET_ASTEROIDS,
    payload: asteroids
  };
}
