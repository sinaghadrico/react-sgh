import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { LABEL_ELEMENTS, LABEL_SIZES } from './consts';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import ChoiceGroup from './index';

storiesOf('ChoiceGroup', module)
  .add(
    'Default',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup label={label} onChange={() => console.log('kha')}>
          <Radio label="Reason one" value="one" />
          <Radio label="Reason two" value="two" />
          <Radio label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Multiple',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup label={label} onChange={() => console.log('kha')}>
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Filter',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup
          label={label}
          filter
          onChange={() => console.log('kha')}
          onOnlySelection={() => console.log('kha select')}>
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Playground',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      const labelSize = select('labelSize', Object.values(LABEL_SIZES), LABEL_SIZES.NORMAL);
      const labelElement = select('labelElement', Object.values(LABEL_ELEMENTS), LABEL_ELEMENTS.H4);
      const error = text('error', 'Something is wrong');
      const filter = boolean('Filter', false);
      return (
        <ChoiceGroup
          label={label}
          labelSize={labelSize as ChoiceGroupLabelSize}
          labelElement={labelElement as ChoiceGroupLabelElement}
          error={error}
          filter={filter}
          onOnlySelection={() => console.log('kha select')}
          onChange={() => console.log('kha')}>
          <Radio label="Reason one" value="one" />
          <Radio label="Reason two" value="two" />
          <Radio label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  );
