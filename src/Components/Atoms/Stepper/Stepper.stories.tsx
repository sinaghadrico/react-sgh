import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';

import StatelessStepper from './StepperStateless';

import Stepper from './index';

storiesOf('Stepper', module)
  .add(
    'Default',
    () => {
      const titleIncrement = text('Title increment', 'Add a passenger');
      const titleDecrement = text('Title decrement', 'Remove a passenger');

      return (
        <Stepper
          titleIncrement={titleIncrement}
          titleDecrement={titleDecrement}
          onChange={() => console.log('action')}
        />
      );
    },
    {
      info: 'Some description about this type of Stepper in general.',
    },
  )
  .add(
    'Stateless',
    () => {
      const min = number('minValue', 1);
      const max = number('maxValue', 10);
      const value = text('value', '2 adults');
      const name = text('Name', 'name');
      const disabled = boolean('disabled', false);
      const dataTest = text('dataTest', 'test');
      const disabledIncrement = boolean('Disabled Increment', false);
      const disabledDecrement = boolean('Disabled Decrement', false);
      const titleIncrement = text('Title increment', 'Add a passenger');
      const titleDecrement = text('Title decrement', 'Remove a passenger');
      return (
        <StatelessStepper
          dataTest={dataTest}
          value={value}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          disabledIncrement={disabledIncrement}
          disabledDecrement={disabledDecrement}
          titleIncrement={titleIncrement}
          titleDecrement={titleDecrement}
          onFocus={() => console.log('action')}
          onBlur={() => console.log('action')}
          onChange={() => console.log('action')}
          onKeyDown={() => console.log('action')}
          onIncrement={() => console.log('action')}
          onDecrement={() => console.log('action')}
        />
      );
    },
    {
      info: 'Here you can try StatelessStepper component with additional functionality.',
    },
  )
  .add(
    'Playground',
    () => {
      const min = number('minValue', 1);
      const max = number('maxValue', 10);
      const step = number('step', 2);
      const defaultValue = number('defaultValue', 4);
      const name = text('Name', 'name');
      const disabled = boolean('disabled', false);
      const dataTest = text('dataTest', 'test');
      const titleIncrement = text('Title increment', 'Add a passenger');
      const titleDecrement = text('Title decrement', 'Remove a passenger');
      return (
        <Stepper
          defaultValue={defaultValue}
          step={step}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          dataTest={dataTest}
          titleIncrement={titleIncrement}
          titleDecrement={titleDecrement}
          onChange={() => console.log('action')}
          onFocus={() => console.log('action')}
          onBlur={() => console.log('action')}
        />
      );
    },
    {
      info: 'Here you can try Stepper component with additional functionality.',
    },
  );
