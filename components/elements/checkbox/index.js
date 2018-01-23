import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../icon/index';

import './style.less';

export default class Checkbox extends Component {

  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.any,
    valueNot: PropTypes.any, // Значение при отмене выбора
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    theme: PropTypes.string,
    icon: PropTypes.string
  };

  static defaultProps = {
    value: true,
    valueNot: false
  };

  onChange = () => {
    if (this.props.onChange) {
      const checked = !this.props.checked;
      this.props.onChange(checked ? this.props.value : this.props.valueNot);
    }
  };

  renderIcon = () => {
    if (this.props.icon) {
      return (
        <Icon className="Checkbox__icon" name={this.props.icon}/>
      );
    }
    return null;
  };

  render() {
    return (
      <label className={cn({
        'Checkbox': true,
        [`Checkbox_theme_${this.props.theme}`]: this.props.theme
      })}>
        <input
          type="checkbox" className="Checkbox__input"
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.onChange}
          disabled={!!this.props.disabled}
        />
        <p className="Checkbox__title">
          {this.renderIcon()}
          {this.props.title}
        </p>
      </label>
    );
  }
}