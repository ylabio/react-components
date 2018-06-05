import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.less';
import Icon from '../icon';

const Direction = {
  Down: 'down',
  Up: 'up'
};

export default class Arrow extends PureComponent {
  static defaultProps = {
    direction: Direction.Down,
    width: '13px',
    height: '13px'
  }

  static propTypes = {
    direction: PropTypes.oneOf(Object.values(Direction)),
    style: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }
  
  getClassNames = () => {
    const { className, direction } = this.props;

    return cn(
      'Arrow',
      className,
      `Arrow__${direction}`
    );
  }

  render() {
    const {
      style,
      onClick,
      width,
      height
    } = this.props;

    return <Icon
      name='arrow'
      style={style}
      width={width}
      height={height}
      onClick={onClick}
      className={this.getClassNames()}
    />;
  }
}
