/**
 * Строковое поле с предопрделнными масками
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';
import cn from 'classnames';
import InputMask from 'react-input-mask';

export default class InputText extends Component {

  static propTypes = {
    value: PropTypes.any,
    type: PropTypes.string,
    errors: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    theme: PropTypes.string,
    maskType: PropTypes.string
  };

  onChange = (e) => {
    if (this.props.onChange) {
      let value = e.target.value;
      if (this.props.maskType) {
        if (this.props.maskType === 'price') {
          value = e.target.value.replace(/[^0-9\.]+/g, '');
          if (!value){
            value = '0';
          }
          value = parseFloat(value);
        } else if (this.props.maskType === 'phone') {
          value = e.target.value.replace(/^\+7|[^0-9]/g, '');
        } else {
          value = e.target.value.replace(/\s/g, '');
        }
      }
      this.props.onChange(value);
    }
  };

  render() {
    const props = {
      type: this.props.type || 'text',
      className: 'InputText__input',
      value: this.props.value,
      placeholder: this.props.placeholder,
      onChange: this.onChange,
    };

    let input;
    if (this.props.maskType) {
      let mask;
      let maskChar = ' ';
      switch (this.props.maskType) {
        case 'phone':
          mask = '+7 (999) 999-99-99';
          maskChar = '_';
          break;
        case 'date':
          mask = '99.99.99';
          break;
        case 'LTDINN':
          mask = '9999999999';
          break;
        case 'PHYINN':
          mask = '999999999999';
          break;
        case 'BIK':
          mask = '999999999';
          break;
        case 'KPP':
          mask = '9999**999';
          break;
        case 'OGRNIP':
          mask = '999999999999999';
          break;
        case 'KS':
          mask = '99999999999999999999';
          break;
        case 'RS':
          mask = '9999999999999999999999999';
          break;
        case 'passport':
          mask = '9999 999999';
          break;
      }
      input =
        <InputMask {...props} mask={mask} maskChar={maskChar} className="InputText__control"/>;
    } else {
      input = <input {...props} className="InputText__control"/>;
    }

    return (
      <div className={cn("InputText", {['InputText_' + this.props.theme]: this.props.theme})}>
        {input}
      </div>
    );
  }
}
