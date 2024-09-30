import React from 'react';

import * as icons from '@ant-design/icons';
import Icon, { iconSizes } from '../src/components/icon';
import { colorPalette } from '../src/constants';

export default {
  title: 'Components/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args} />;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: 'Heart',
  color: colorPalette.primary,
  size: iconSizes.XLARGE
}

export const AntDIcon = Template.bind({});
AntDIcon.args = {
  className: icons.AccountBookFilled,
  color: 'red',
  size: iconSizes.LARGE
}