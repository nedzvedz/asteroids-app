import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../interfaces/action';
import Listing from './Listing.component';
import { getAsteroids } from '../../actions/asteroids.actions';
import { ApplicationState } from '../../states/app.state';
import { RouteComponentProps } from 'react-router-dom';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
interface OwnProps extends RouteComponentProps<void> {}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps) => {
  return {
    asteroids: state.asteroids
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => Action>) => {
  return {
    getAsteroids: () => {
      dispatch(getAsteroids());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
