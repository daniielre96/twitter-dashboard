import React from 'react';

import Checkbox from '../src/components/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
}

const Template = (args) => <Checkbox {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: 'Dame para activarme',
  defaultChecked: false,
  disabled: false
}