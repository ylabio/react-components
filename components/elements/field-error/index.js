/**
 * Вывод ошибки из общего массива ошибок
 * У каждой ошибки ожидайется ключ, соответсвующий пути на свойство модели, например "profile.name"
 * Компонент выводит ошибку, если по указанному ключу есть ошибка в общем массиве ошибок
 * @todo Вместо массива ошибок использовать объект, чтобы оптимизироват поиск
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./style.less";

export default class FieldError extends Component {

  static propTypes = {
    errors: PropTypes.any,
    path: PropTypes.string
  };

  renderItems() {
    const path = this.props.path;
    const items = [];
    this.props.errors.map(item => {
      if ((item.path.length && item.path.join('.').indexOf(path) === 0 && path.length > 0) ||
        (item.path.length === 0 && path.length === 0)) {
        items.push((
          <div key={item.rule} className="FieldForm__item">
            {item.message}
          </div>
        ));
      }
    });
    return items;
  }

  render() {
    return (
      <div className="FieldError">
        {this.renderItems()}
      </div>
    );
  }
}