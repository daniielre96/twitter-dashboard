import PropTypes from 'prop-types';
import React from "react";

import { buttonVariants, variantConfig } from "./constants/variants";

import { StyledButton } from "./Button.styles";

const Button = ({ label, loading, disabled, onClick, color, variant, ...rest}) => {
  const config = variantConfig(color, disabled);

  return (
    <StyledButton
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      {...config[variant]}
      {...rest}
    >
      {label}
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