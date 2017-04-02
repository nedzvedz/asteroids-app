import { Action } from '../interfaces/action';
import { Dispatch } from 'redux';
import asteroidsService from '../services/asteroids.service';
import {Asteroid} from "../interfaces/asteroid";

export const actionTypes = {
  SET_CURRENT_ASTEROID: 'SET_CURRENT_ASTEROID'
};

export function getCurrentAsteroid(id: string) {
  return (dispatch: Dispatch<() => Action>) => {
    asteroidsService.getAsteroidById(id)
      .then((asteroid) => {
        dispatch(setCurentAsteroid(<Asteroid>asteroid));
      });
  }
}

export function setCurentAsteroid(asteroid: Asteroid): Action {
  return {
    type: actionTypes.SET_CURRENT_ASTEROID,
    payload: asteroid
  };
}
