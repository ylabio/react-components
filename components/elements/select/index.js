import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./style.less";
import cn from 'classnames';

export default class Select extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
    error: PropTypes.any,
    theme: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentWillUnmount() {
    if (this.state.expanded) {
      window.document.removeEventListener('click', this.onExpand);
    }
  }

  onExpand = () => {
    if (!this.props.disabled) {
      if (!this.state.expanded) {
        window.document.addEventListener('click', this.onExpand);
      } else {
        window.document.removeEventListener('click', this.onExpand);
      }
      this.setState({
        expanded: !this.state.expanded
      });
    }
  };

  onSelectOption(value) {
    return () => {
      if (this.props.onChange /*&& value!==this.props.value*/) {
        this.props.onChange(value);
      }
    };
  }

  render() {
    const {value: selectedValue, placeholder, options, theme, color, error, style} = this.props;
    const selected = options.find(item => (item.value === selectedValue));
    const selectedTitle = typeof selected !== 'undefined' ? selected.title : placeholder;

    return (
      <div
        className={cn({
          "Select": true,
          [`Select_${color}`]: color,
          [`Select_${theme}`]: theme,
          "expanded": this.state.expanded
        })}
        style={style}
        onClick={this.onExpand}>
        <div className={cn("Select__value", {"Select__value_placeholder": !selected})}>
          {selectedTitle}
          <i className="Select__toggler"/>
        </div>
        <div className="Select__error">{error ? error : ''}</div>
        <div className={cn("Select__list", {"expanded": this.state.expanded})}>
          {options.map(({value, title}) => (
            <div
              key={value}
              className={cn("Select__item", {"active": value === selectedValue})}
              onClick={this.onSelectOption(value)}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
