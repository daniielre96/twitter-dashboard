import React from 'react';

import { Alert } from 'antd';
import Spinner from '../src/components/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner
}

const Template = (args) => <Spinner {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  fullscreen: false,
  size:'medium',
  spinning: true,
  label:'Loading...',
  children: <Alert message="Alert message title" />
}