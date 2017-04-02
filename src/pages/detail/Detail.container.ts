import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../interfaces/action';
import Detail from './Detail.component';
import { getCurrentAsteroid } from '../../actions/current-asteroid.actions';
import { ApplicationState } from '../../states/app.state';
import { RouteComponentProps } from 'react-router-dom';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
interface OwnProps extends RouteComponentProps<void> {}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps) => {
  return {
    asteroid: state.currentAsteroid
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => Action>) => {
  return {
    getCurrentAsteroid: (id: string) => {
      dispatch(getCurrentAsteroid(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
