import { initialFiltersState, FiltersState } from '../states/filters.state';
import { actionTypes } from '../actions/filters.actions';
import { Action } from '../interfaces/action';

function filters(
  state: FiltersState = initialFiltersState,
  action: Action
): FiltersState {
  switch (action.type) {
    case actionTypes.TOGGLE_HAZARDOUS:
      return {
        ...state,
        showOnlyHazardous: action.payload
      };
    default:
      return state;
  }
}

export default filters;
