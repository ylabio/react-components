/**
 * Список чекбоксов
 * В передаваемых вариантах (values) учитывается свойство group
 * - опции с одинаковой группой (если не пустая строка) взамиоисключающие
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import {Icon} from '../../elements';
import './style.less';

export default class CheckboxList extends Component {

  static propTypes = {
    values: PropTypes.array.isRequired,
    options: PropTypes.array,//value, title
    button: PropTypes.element,
    onChange: PropTypes.func,
    notToggle: PropTypes.bool
  };

  onReset = (e) => {
    e.preventDefault();
    if (this.props.onChange) {
      this.props.onChange([]);
    }
  };

  onChangeItem(option) {
    return (value) => {
      if (this.props.onChange) {
        const values = [...this.props.values];
        if (value) {
          if (option.group) {
            this.props.options.map(item => {
              if (item.group === option.group) {
                const valueIndex = values.indexOf(item.value);
                if (valueIndex !== -1) {
                  values.splice(valueIndex, 1);
                }
              }
            });
          }
        }

        const valueIndex = values.indexOf(option.value);
        if (value === false && !this.props.notToggle) {
          if (valueIndex !== -1) {
            values.splice(valueIndex, 1);
          }
        } else {
          if (valueIndex === -1) {
            values.push(value);
          }
        }
        this.props.onChange(values);
      }
    };
  }

  render() {

    const items = this.props.options.map(option => {
      return {
        title: option.title,
        value: option.value,
        icon: option.icon,
        checked: this.props.values.indexOf(option.value) !== -1,
        onChange: this.onChangeItem(option),
      };
    });

    return (
      <div className="CheckboxList">
        {/*<a className="ListCheckbox__button" onClick={this.onReset}>*/}
        {/*<Icon name="arrow-circle"/>*/}
        {/*</a>*/}
        <ul className="CheckboxList__list">
          {
            items.map((item) => (
              <li key={item.value} className="CheckboxList__item">
                <Checkbox {...item}/>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
