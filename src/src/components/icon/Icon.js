import React from 'react';
import { IconWrapper } from "./Icon.styles";
import * as Icons from '@ant-design/icons'; // Importa todos los iconos de Ant Design



const StyledIcon = ({ icon, color, width, height }) => {
  const AntIcon = Icons[icon];

  if (!AntIcon) {
    return <span>Not found</span>;
  }

  return (
    <IconWrapper color={color} width={width} height={height}>
      <AntIcon />
    </IconWrapper>
  );
};

export default StyledIcon;