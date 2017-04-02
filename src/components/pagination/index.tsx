import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './style.css';

interface Props {
  activePage: number;
  itemsPerPage: number;
  itemsCount: number;
  onPageSelect: (pageNumber: number) => void;
}

export default class Pagination extends React.Component<Props, null> {

  render() {
    const { activePage, itemsPerPage, itemsCount, onPageSelect } = this.props;
    const pageNumbers = new Array(Math.ceil(itemsCount / itemsPerPage)).fill('x');
    return (
      <div className="pagination">
        <RaisedButton
          disabled={activePage === 1}
          onClick={() => onPageSelect(activePage - 1)}
          primary={true}
        >
          Previous
        </RaisedButton>
        <ul className="pagination__list">
          {pageNumbers.map((page: void, index: number) => {
            const pageNumber: number = index + 1;
            const props = {
              onClick: () => onPageSelect(pageNumber),
              key: index,
              className: 'pagination__item',
              style: {
                minWidth: 40,
                margin: '0 10px 0 0'
              }
            };

            return activePage === pageNumber ?
              <RaisedButton primary={true} {...props}>{pageNumber}</RaisedButton> :
              <FlatButton {...props}>{pageNumber}</FlatButton>;
          })}
        </ul>
        <RaisedButton
          disabled={activePage === Math.ceil(itemsCount / itemsPerPage)}
          onClick={() => onPageSelect(activePage + 1)}
          primary={true}
        >
          Next
        </RaisedButton>
      </div>
    );
  }
}