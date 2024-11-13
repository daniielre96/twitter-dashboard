import React from 'react';

import Input from '../src/components/input';


export default {
    title: 'Components/Input',
    component: Input
}
  
  const Template = (args) => <Input {...args}/>;
  
  
  export const PrimaryDefault = Template.bind({});
  PrimaryDefault.args = {
    id: 'inputID', 
    variant: 'outlined',
    maxLength: 15,
    placeHolder: 'Enter a word'
  }

  export const LabelInput = Template.bind({});
  LabelInput.args = {
    id: 'labelInputID', 
    variant: 'filled',
    maxLength: 15,
    placeHolder: 'Enter a user',
    addonBefore: 'User to search:'
  }

  export const ErrorInput = Template.bind({});
  ErrorInput.args = {
    id: 'ErrorInputID', 
    variant: 'outlined',
    maxLength: 15,
    status: 'error',
    placeHolder: 'Input is an error',
    addonBefore: 'Enter a input:'
  }