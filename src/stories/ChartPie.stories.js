import React from 'react';

import ChartPie from '../src/components/charts/chart-pie';

export default {
  title: 'Components/Chart Pie',
  component: ChartPie
}

const Template = (args) => <ChartPie {...args}/>;

const items = [
  { type: 'HASHTAG 1', value: 27 },
  { type: 'HASHTAG 2', value: 25 },
  { type: 'HASHTAG 3', value: 18 },
  { type: 'HASHTAG 4', value: 15 },
  { type: 'HASHTAG 5', value: 10 },
  { type: 'HASHTAG 6', value: 5 },
]

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: "Primary\nDefault",
  items: items
}