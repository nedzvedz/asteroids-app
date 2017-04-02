import { initialCurrentAsteroidState, CurrentAsteroidState } from '../states/current-asteroid.state';
import { actionTypes } from '../actions/current-asteroid.actions';
import { Action } from '../interfaces/action';

function currentAsteroid(
  state: CurrentAsteroidState = initialCurrentAsteroidState,
  action: Action
): CurrentAsteroidState {
  switch (action.type) {
    case actionTypes.SET_CURRENT_ASTEROID:
      return action.payload;
    default:
      return state;
  }
}

export default currentAsteroid;
