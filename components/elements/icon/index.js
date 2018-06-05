import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./style.less";
import iconsEnum from './enums/icons-enum';

export default class Icon extends Component {

  static propTypes = {
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.string
  };

  render() {
    const {name, width, height} = this.props;
    
    if (iconsEnum[name]) {
      return (
        <i
          className="Icon"
          width={width || '1.1em'}
          height={height || '1.1em'}
          dangerouslySetInnerHTML={{__html: iconsEnum[name]}}
        />
      );
    }
    
    return null;
  }
}
