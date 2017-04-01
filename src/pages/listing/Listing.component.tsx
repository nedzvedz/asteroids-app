import * as React from 'react';
import { Asteroid } from '../../interfaces/asteroid';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<void> {
  asteroids: Array<Asteroid>;
  getAsteroids: () => void;
}

export default class Listing extends React.Component<Props, void> {

  componentDidMount() {
    this.props.getAsteroids();
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.asteroids.map((asteroid: Asteroid, idx: number) => {
            return <li key={idx}><pre>{JSON.stringify(asteroid)}</pre></li>;
          })}
        </ul>
      </div>
    );
  }
}
