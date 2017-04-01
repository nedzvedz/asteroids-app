import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { Asteroid } from '../../interfaces/asteroid';

import './style.css';

export default (props: { asteroid: Asteroid }) => {
  const { asteroid } = props;
  const { estimated_diameter_min, estimated_diameter_max } = asteroid.estimated_diameter.meters;
  const detailUrl = `/detail/${asteroid.neo_reference_id}`;

  return (
    <div className="asteroid">
      <div className="asteroid__column">
        <h2 className="asteroid__name">{asteroid.name}</h2>
      </div>
      <div className="asteroid__column">
        <strong>Absolute magnitude:</strong> {asteroid.absolute_magnitude_h}
      </div>
      <div className="asteroid__column">
        <p><strong>Estimated diameter in meters:</strong></p>
        <p>Min diameter: {estimated_diameter_min}</p>
        <p>Max diameter: {estimated_diameter_max}</p>
      </div>
      <div className="asteroid__column">
        <RaisedButton
          containerElement={<Link to={detailUrl} />}
          primary={true}
          className="asteroid__link"
        >
          Details
        </RaisedButton>
      </div>
    </div>
  );
}
