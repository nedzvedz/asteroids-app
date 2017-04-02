import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Asteroid } from '../../interfaces/asteroid';
import { RouteComponentProps } from 'react-router-dom';
import AsteroidComponent from '../../components/asteroid';
import Pagination from '../../components/pagination';
import Spinner from '../../components/spinner';
import {Action} from "../../interfaces/action";

interface Props extends RouteComponentProps<void> {
  asteroids: Array<Asteroid>;
  getAsteroids: () => void;
  showOnlyHazardous: boolean;
  toggleHazardous: (isChecked: boolean) => Action;
}

interface State {
  activePage: number,
  itemsPerPage: number
}

export default class Listing extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      activePage: 1,
      itemsPerPage: 5
    };
  }

  componentDidMount() {
    this.props.getAsteroids();
  }

  render() {
    if (!this.props.asteroids.length) {
      return <Spinner />;
    }

    const filteredByPageAsteroids = this.props.asteroids.filter((asteroid, index) => {
      const { activePage, itemsPerPage } = this.state;
      const startIndex = (activePage - 1) * itemsPerPage;
      const endIndex = activePage * itemsPerPage;
      return index >= startIndex && index < endIndex;
    });

    return (
      <div>
        { this.renderFilters() }

        { this.props.asteroids.length > this.state.itemsPerPage ?
          <Pagination
            activePage={this.state.activePage}
            itemsPerPage={this.state.itemsPerPage}
            itemsCount={this.props.asteroids.length}
            onPageSelect={(pageNumber: number) => this.changePage(pageNumber)}
          /> :
          null
        }

        <List>
          { filteredByPageAsteroids.map((asteroid: Asteroid, idx: number) => {
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

  renderFilters() {
    const paperStyle = {
      height: 70,
      margin: '10px 0',
      padding: '0 10px',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    } as any;

    const toggleStyle = {
      width: 'auto'
    };
    return (
      <Paper zDepth={2} style={paperStyle}>
        <Toggle
          toggled={this.props.showOnlyHazardous}
          label="Show only potentially hazardous"
          onToggle={(e: React.ChangeEvent<EventTarget>, isChecked: boolean): Action => this.props.toggleHazardous(isChecked)}
          style={toggleStyle}
        />
        <SelectField
          floatingLabelText="Asteroids per page"
          value={this.state.itemsPerPage}
          onChange={(e, idx, value) => this.changeItemsPerPage(value)}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
        </SelectField>
      </Paper>
    );
  }

  changePage(pageNumber: number): void {
    this.setState({
      ...this.state,
      activePage: pageNumber
    });
  }

  changeItemsPerPage(value: number): void {
    this.setState({
      activePage: 1,
      itemsPerPage: value
    });
  }
}
