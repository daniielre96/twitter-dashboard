import React from 'react';

import * as icons from '@ant-design/icons';
import Icon, { iconSizes } from '../src/components/icon';

export default {
  title: 'Components/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args}/>;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: 'Heart',
  color: 'blue',
  size: iconSizes.XLARGE
}

export const AntDIcon = Template.bind({});
AntDIcon.args = {
  className: icons.SmileTwoTone,
  color: 'red',
  size: iconSizes.LARGE
}