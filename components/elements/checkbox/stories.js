import React from 'react';
import {storiesOf} from '@storybook/react';

import Checkbox from './index';

storiesOf('Checkbox', Checkbox)
  .add('default', () => (
    <Checkbox
      title="Чекбокс"
    />
  ));