import { Action } from '../interfaces/action';
import { Dispatch } from 'redux';
import asteroidsService from '../services/asteroids.service';
import {Asteroid} from "../interfaces/asteroid";

export const actionTypes = {
  START_LOADING_CURRENT_ASTEROID: 'START_LOADING_CURRENT_ASTEROID',
  SET_CURRENT_ASTEROID: 'SET_CURRENT_ASTEROID'
};

export function getCurrentAsteroid(id: string) {
  return (dispatch: Dispatch<() => Action>) => {
    dispatch(setCurrentAsteroid(null));
    asteroidsService.getAsteroidById(id)
      .then((asteroid) => {
        dispatch(setCurrentAsteroid(<Asteroid>asteroid));
      });
  }
}

export function startLoadingCurrentAsteroid(): Action {
  return {
    type: actionTypes.START_LOADING_CURRENT_ASTEROID
  };
}

export function setCurrentAsteroid(asteroid: Asteroid): Action {
  return {
    type: actionTypes.SET_CURRENT_ASTEROID,
    payload: asteroid
  };
}
