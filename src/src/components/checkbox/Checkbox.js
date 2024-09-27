import PropTypes from 'prop-types';
import React from "react";



import { StyledCheckbox } from "./Checkbox.styles";

const Checkbox = ({ label, defaultChecked, disabled, onChange, ...rest}) => {

  return (
    <StyledCheckbox
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    >
      {label}
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProp = {
  onChange: () => {},
  defaultChecked: false,
  disabled: false
}

export default Checkbox;