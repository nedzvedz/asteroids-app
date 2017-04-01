import { initialAsteroidsState, AsteroidsState } from '../states/asteroids.state';
import { actionTypes } from '../actions/asteroids.actions';
import { Action } from '../interfaces/action';

function asteroids(state: AsteroidsState = initialAsteroidsState, action: Action): AsteroidsState {
  switch (action.type) {
    case actionTypes.SET_ASTEROIDS:
      return action.payload;
    default:
      return state;
  }
}

export default asteroids;
