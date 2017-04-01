import { combineReducers } from 'redux';
import asteroids from './asteroids.reducer';
import currentAsteroid from './current-asteroid.reducer';

export default combineReducers({
  asteroids,
  currentAsteroid
});