import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import './style.css';

export default () => {
  return <div className="spinner"><CircularProgress size={60} thickness={7} /></div>;
}
