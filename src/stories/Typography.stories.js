import React from 'react';

import Typography from '../src/components/typography';
import { fontSizes, colorPalette } from '../src/constants';

export default {
  title: 'Components/Typography',
  component: Typography
}

const Template = (args) => <Typography {...args}/>;

export const BodyText = Template.bind({});
BodyText.args = {
  children: 'Soy un texto simple sin nada que destacar',
  weight: fontSizes.BODY_MEDIUM,
  color: colorPalette.secondary_text
}

export const Title = Template.bind({});
Title.args = {
  children: 'Soy un title',
  weight: fontSizes.TITLE_LARGE,
  uppercase: true,
  bold: true,
  align: 'center'
}