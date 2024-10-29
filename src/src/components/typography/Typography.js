import PropTypes from 'prop-types';
import React from "react";

import { colorPalette, fontSizes, fontStyleMap } from '../../constants';

import { StyledTypography } from "./Typography.style";

const Typography = ({ children, color, align, weight, bold, uppercase, italic, underline, ...rest}) => {
  
  const defaultWeight = weight ? weight : fontSizes.BODY_MEDIUM;

  const myStyle = fontStyleMap[defaultWeight];
  
  return (
    <StyledTypography
      color={color}
      align={align}
      weight={myStyle.fontSize}
      bold={bold}
      italic={italic}
      uppercase={uppercase}
      underline={underline}
      fontfamily={myStyle.fontFamily}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string,
    PropTypes.node]
  ),
  color: PropTypes.string,
  align: PropTypes.string,
  weight: PropTypes.string,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool,
  onClick: PropTypes.func
}

Typography.defaultProp = {
  color: colorPalette.primary_text,
  weight: fontSizes.BODY_MEDIUM,
  bold: false,
  align: 'left'
}

export default Typography;