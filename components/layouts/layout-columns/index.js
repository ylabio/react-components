/**
 * Разметка по колонкам
 * Все вложенные компоненты разносятся на соответсвующее количество колонок
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default class LayoutColumn extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    let {children} = this.props;
    if (!Array.isArray(children)) {
      children = [children];
    }

    return (
      <div className="LayoutColumn">
        {children.map((item, i) => (
          <div key={i} className="LayoutColumn__item">
            {item}
          </div>
        ))}
      </div>
    );
  }
}
