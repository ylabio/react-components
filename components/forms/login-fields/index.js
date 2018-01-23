import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';
import {Checkbox, InputText, FieldError} from '../../forms';

export default class Login extends Component {

  static propTypes = {
    data: PropTypes.object,
    errors: PropTypes.array,
    onChange: PropTypes.func,
  };

  onChangeField(name) {
    return (value) => {
      const data = {...this.props.data, [name]: value};
      if (this.props.onChange) {
        this.props.onChange(data);
      }
    };
  }

  render() {
    const {data, errors} = this.props;

    return (
      <div className="LoginFields">
        <div className="LoginFields__item LoginFields__item--email">
          <label>
            <div className="LoginFields__label">Контактный E-mail</div>
            <InputText
              value={data.login}
              onChange={this.onChangeField('login')}
              theme="--login"
              label="Email"
              placeholder="Email"
            />
          </label>

          <FieldError errors={errors} path="login"/>
        </div>
        <div className="LoginFields__item LoginFields__item--password">
          <label>
            <div className="LoginFields__label">Пароль</div>
            <InputText
              value={data.password} type="password"
              onChange={this.onChangeField('password')}
              theme="--login"
              label="Пароль"
              placeholder="********"
              resetPassword={true}/>
          </label>
          <FieldError errors={errors} path="password"/>
        </div>
        <div className="LoginFields__item">
          <FieldError errors={errors} path="/login"/>
        </div>
      </div>
    );
  }
}
