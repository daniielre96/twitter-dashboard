import PropTypes from "prop-types";
import React from "react";

import { SyncOutlined } from '@ant-design/icons';
import { colorPalette } from "../../constants";
import Typography from '../typography';
import { StyledSpinner } from './Spinner.styles';

const Spinner = ({ fullscreen,  size, spinning, label, children }) => {

  return(
    <StyledSpinner
      fullscreen={fullscreen}
      size={size}
      spinning={spinning}
      tip={<Typography color={colorPalette.primary}>{label}</Typography>}
      indicator={<SyncOutlined spin color={colorPalette.primary}/>}
    >
      {children}
    </StyledSpinner>
  )
}

Spinner.propTypes = {
  fullscreen: PropTypes.bool,
  size: PropTypes.string,
  spinning: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node
}

Spinner.defaultProps = {
  fullscreen: false,
  size: 'medium',
  spinning: true,
}

export default Spinner;