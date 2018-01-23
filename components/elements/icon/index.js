import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./style.less";

const icons = {
  'cards': require('./img/cards.svg'),
  'check': require('./img/check.svg'),
  'coffee': require('./img/coffee.svg'),
  'cross': require('./img/cross.svg'),
  'paid-parking': require('./img/paid-parking.svg'),
  'parking': require('./img/parking.svg'),
  'wi-fi': require('./img/wi-fi.svg'),
};

export default class Icon extends Component {

  static propTypes = {
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.string
  };

  render() {
    const {name, width, height} = this.props;
    if (icons[name]) {
      return (
        <i
          className="Icon"
          width={width ? width : '1.1em'}
          height={height ? height : '1.1em'}
          dangerouslySetInnerHTML={{__html: icons[name]}}
        />
      );
    } else {
      return null;
    }
  }
}
