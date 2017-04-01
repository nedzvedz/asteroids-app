import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Asteroid } from '../../interfaces/asteroid';
import { RouteComponentProps } from 'react-router-dom';
import AsteroidComponent from '../../components/asteroid';

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
        <h2>Found asteroids:</h2>
        <List>
          { this.props.asteroids.map((asteroid: Asteroid, idx: number) => {
            return (
              <ListItem key={idx}>
                <AsteroidComponent asteroid={asteroid} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
