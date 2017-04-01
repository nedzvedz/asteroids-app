import { Action } from '../interfaces/action';

export const actionTypes = {
  SET_CURRENT_ASTEROID: 'SET_CURRENT_ASTEROID'
};

export function setCurentAsteroid(id: string): Action {
  return {
    type: actionTypes.SET_CURRENT_ASTEROID,
    payload: id
  };
}
