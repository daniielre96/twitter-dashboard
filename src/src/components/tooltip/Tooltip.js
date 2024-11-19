import PropTypes from 'prop-types';
import React from 'react';

import { colorPalette, fontSizes } from '../../constants';
import Typography from '../typography';
import { StyledTooltip} from './Tooltip.styles';


const Tooltip = ({ children, title, placement, color, pointAtCenter, ...rest}) => {

  return (
    <StyledTooltip title ={title} color={color} placement={placement} pointAtCenter={pointAtCenter} {...rest}>
            {children}
    </StyledTooltip>

  );
}

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  placement: PropTypes.string,
  pointAtCenter: PropTypes.string
}

Tooltip.defaultProps = {
  children: '',
  color: colorPalette.primary,
  title: '',
  placement: 'top',
  pointAtCenter: true
}

export default Tooltip;