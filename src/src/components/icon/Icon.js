import Icon, { setTwoToneColor } from '@ant-design/icons';
import PropTypes from 'prop-types';
import React from 'react';
import * as icons from '../icon/assets';
import { iconSizeMap, iconSizes } from './constants/size';

const StyledIcon = ({ icon, className, color, size, spin }) => {

  const iconComponent = icons[icon] ? icons[icon] : className
  setTwoToneColor(color)

  return (
      <Icon 
        component={iconComponent}
        style={{ color: color, fontSize: iconSizeMap[size]}}
        spin={spin}
      />
  )
};

StyledIcon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool
}

StyledIcon.defaultProp = {
  spin: false,
  size: iconSizes.MEDIUM
}

export default StyledIcon;