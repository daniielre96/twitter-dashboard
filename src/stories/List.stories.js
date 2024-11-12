import React from 'react';

import List from '../src/components/list';

export default {
  title: 'Components/List',
  component: List
}

const Template = (args) => <List {...args}/>;

export const DefaultList = Template.bind({});
DefaultList.args = {
  
}