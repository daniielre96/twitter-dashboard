import React from 'react';

import DatePicker from '../src/components/date-picker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker
}

const Template = (args) => <DatePicker {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  disabled: false,
  fechaFin: '20/11/2024',
  minDate: '13/11/2024',
  maxDate: '30/11/2024'
}