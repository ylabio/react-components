import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./style.less";
import cn from 'classnames';
import {Link} from 'react-router-dom';

export default class Textarea extends Component {

  static propTypes = {
    value: PropTypes.any,
    errors: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    theme: PropTypes.string,
    label: PropTypes.string,
  };

  onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };


  render() {
    const {placeholder, value} = this.props;

    return (
      <div className={cn("Textarea", {['Textarea' + this.props.theme]: this.props.theme})}>
        <div className="Textarea__control">
          <textarea
            type="text"
            className="Textarea__input"
            value={value}
            placeholder={placeholder}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}