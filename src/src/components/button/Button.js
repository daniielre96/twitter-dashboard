import PropTypes from 'prop-types';
import React from "react";

import { buttonVariants, variantConfig } from "./constants/variants";

import Typography from '../typography';

import { colorPalette } from '../../constants';

import { StyledButton } from "./Button.styles";

const Button = ({ label, loading, disabled, onClick, color, variant, ...rest}) => {
  const config = variantConfig(disabled, loading);

  return (
    <StyledButton
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      {...config[variant]}
      {...rest}
    >
      <Typography color={color}>
        {label}
      </Typography>
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(buttonVariants)),
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string
}

Button.defaultProp = {
  onClick: () => {},
  color: "#D198DD",
  variant: 'primary'
}

export default Button;