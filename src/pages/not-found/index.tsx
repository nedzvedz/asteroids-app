import * as React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';
import {Link} from 'react-router-dom';

export default class NotFound extends React.Component<void, void> {

  render() {

    return (
      <Paper className="not-found" zDepth={2}>
        <h2 className="not-found__title">Sorry! Page not found.</h2>

        <RaisedButton
          containerElement={<Link className="not-found__link" to="/" />}
          primary={true}
        >
          <span className="not-found__link-text">Back to Home page</span>
        </RaisedButton>
      </Paper>
    );
  }
};
