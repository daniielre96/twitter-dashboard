import React from 'react';

import Button from '../src/components/button';

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => <Button {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: 'PATATA',
  loading: false,
  disabled: false,
  variant: 'primary'
}