import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../interfaces/action';
import Listing from './Listing.component';
import { getAsteroids } from '../../actions/asteroids.actions';
import { toggleHazardous } from '../../actions/filters.actions';
import { ApplicationState } from '../../states/app.state';
import { RouteComponentProps } from 'react-router-dom';
import {Asteroid} from "../../interfaces/asteroid";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
interface OwnProps extends RouteComponentProps<void> {}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps) => {
  const { showOnlyHazardous } = state.filters;
  let asteroids = null;

  if (showOnlyHazardous) {
    asteroids = state.asteroids.filter((asteroid: Asteroid): boolean => {
      return asteroid.is_potentially_hazardous_asteroid;
    });
  } else {
    asteroids = state.asteroids;
  }

  return { asteroids, showOnlyHazardous };
};

const mapDispatchToProps = (dispatch: Dispatch<() => Action>) => {
  return {
    getAsteroids: () =>  dispatch(getAsteroids()),
    toggleHazardous: (isChecked: boolean) => dispatch(toggleHazardous(isChecked))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
