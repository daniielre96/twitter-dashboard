import React from 'react';
import StyledIcon from '../src/components/icon'; // Importa el componente base


export default {
    component: StyledIcon
  }

const Template = (args) => <StyledIcon {...args}/>;


export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  icon: "HomeOutlined",
  color: "blue",
  width: "30px",
  height: "30px"
}



