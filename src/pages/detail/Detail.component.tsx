import * as React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import Spinner from '../../components/spinner';
import { red100, red800 } from 'material-ui/styles/colors';

import './style.css';

export default class Detail extends React.Component<any, void> {
  componentDidMount() {
    this.props.getCurrentAsteroid(this.props.match.params.id);
  }

  render() {
    const { asteroid } = this.props;

    const titleStyle = {
      fontSize: 25,
      fontWeight: 600
    } as {};

    const paperStyle = {
      background: red100,
      color: red800
    };

    const warningStyle = {
      width: 40,
      height: 40,
      marginRight: 10
    };

    if (!asteroid) {
      return <Spinner />;
    }

    return (
      <Card className="detail-card">
        <CardHeader title={asteroid.name} titleStyle={titleStyle} />
        <CardText>
          { asteroid.is_potentially_hazardous_asteroid ? (
              <Paper
                className="detail-card__warning"
                style={paperStyle}
                zDepth={2}
                rounded={false}
              >
                <WarningIcon style={warningStyle} color={red800} />
                Is potentially hazardous!
              </Paper>
            ) : null }
          {this.renderEstimatedDiameterTabs()}
        </CardText>
      </Card>
    );
  }

  renderEstimatedDiameterTabs() {
    const { kilometers, meters, miles, feet } = this.props.asteroid.estimated_diameter;

    return (
      <Paper
        zDepth={2}
      >
        <Tabs>
          <Tab label="Kilometers" >
            <div className="detail-card__tab">
              <p>
                <strong>Min estimated diameter:</strong> {kilometers.estimated_diameter_min}
              </p>
              <p>
               <strong>Max estimated diameter:</strong> {kilometers.estimated_diameter_max}
              </p>
            </div>
          </Tab>
          <Tab label="Meters" >
            <div className="detail-card__tab">
              <p>
                <strong>Min estimated diameter:</strong> {meters.estimated_diameter_min}
              </p>
              <p>
                <strong>Max estimated diameter:</strong> {meters.estimated_diameter_max}
              </p>
            </div>
          </Tab>
          <Tab
            label="Miles"
          >
            <div className="detail-card__tab">
              <p>
                <strong>Min estimated diameter:</strong> {miles.estimated_diameter_min}
              </p>
              <p>
                <strong>Max estimated diameter:</strong> {miles.estimated_diameter_max}
              </p>
            </div>
          </Tab>
          <Tab
            label="Feet"
          >
            <div className="detail-card__tab">
              <p>
                <strong>Min estimated diameter:</strong> {feet.estimated_diameter_min}
              </p>
              <p>
                <strong>Max estimated diameter:</strong> {feet.estimated_diameter_max}
              </p>
            </div>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}
