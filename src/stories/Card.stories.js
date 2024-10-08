import React from 'react';

import Card from '../src/components/card';

export default {
  title: 'Components/Card',
  component: Card
}

const items = [
    'HASHTAG 1',
    'HASHTAG 2',
    'HASHTAG 3',
    'HASHTAG 4',
    'HASHTAG 5',
    'HASHTAG 6'];

const Template = (args) => <Card {...args}/>;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  label: 'Soy un tweet muy novedoso, más que el Cobol ese...',
  nLikes: 1500,
  nRetwits: 200,
  hashtags: items,
  user: 'joseruizlee',
  date: '04/10/2024',
  confidence: '80% - Fun',
  onClick: () => alert('Estamos recalculando')
}