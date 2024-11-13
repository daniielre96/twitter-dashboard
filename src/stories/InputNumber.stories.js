import React from 'react';

import InputNumber from '../src/components/input_number';


export default {
    title: 'Components/InputNumber',
    component: InputNumber
}
  
  const Template = (args) => <InputNumber {...args}/>;
  
  
  export const PrimaryDefault = Template.bind({});
  PrimaryDefault.args = {
    variant: 'outlined',
    placeHolder: 'Numeric'
  }

  export const LabelInput = Template.bind({});
  LabelInput.args = {
    variant: 'filled',
    addonBefore: 'Last tweets to search:',
  }

  export const ErrorInput = Template.bind({});
  ErrorInput.args = {
    status: 'error',
    placeHolder: 'Error'
  }