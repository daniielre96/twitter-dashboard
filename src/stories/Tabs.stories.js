import React from 'react';

import Tabs from '../src/components/tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs
}

const Template = (args) => <Tabs {...args}/>

const items = [
  {
    label: 'Twitts',
    children: <h1>Twitts tab</h1>,
    key: "0"
  },
  {
    label: 'Users',
    children: <h1>Users tab</h1>,
    key: "1"
  },
  {
    label: 'Statistics',
    children: <h1>Statistics tab</h1>,
    key: "2"
  }
]

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  size: 'middle',
  items: items
}
