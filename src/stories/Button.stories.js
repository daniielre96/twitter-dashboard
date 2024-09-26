import React from 'react';

import Button, { buttonVariants } from '../src/components/button';

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => <Button {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: 'Primary',
  loading: false,
  disabled: false,
  variant: buttonVariants.PRIMARY
}

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  label: 'Success',
  loading: false,
  disabled: false,
  variant: buttonVariants.SUCCESS
}

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  label: 'Error',
  loading: false,
  disabled: false,
  variant: buttonVariants.ERROR
}

export const FunctionDefault = Template.bind({});
FunctionDefault.args = {
  label: 'Function',
  loading: false,
  disabled: false,
  variant: buttonVariants.PRIMARY,
  onClick: () => alert('Function Default')
}