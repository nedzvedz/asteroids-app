import { Action } from '../interfaces/action';

export const actionTypes = {
  TOGGLE_HAZARDOUS: 'TOGGLE_HAZARDOUS'
};

export function toggleHazardous(isChecked: boolean): Action {
  return {
    type: actionTypes.TOGGLE_HAZARDOUS,
    payload: isChecked
  };
}
