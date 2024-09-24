import React from 'react';

import Tags from '../src/components/tags';

export default {
    component: Tags
}
  
  const Template = (args) => <Tags {...args}/>;
  
  const items = [
    'HASHTAG 1',
    'HASHTAG 2',
    'HASHTAG 3',
    'HASHTAG 4',
    'HASHTAG 5',
    'HASHTAG 6'];
  
  export const PrimaryDefault = Template.bind({});
  PrimaryDefault.args = {
    items: items,
    bordered: true,
    random: false
  }

  

  