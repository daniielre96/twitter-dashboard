import PropTypes from "prop-types";
import React from "react";

import { StyledSelect } from "./Select.styles";

const Select = ({
  items,
  defaultValue,
  handleChange,
  loading,
  disabled,
  minWidth,
}) => {
  return (
    <StyledSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      options={items}
      loading={loading}
      disabled={disabled}
      minWidth={minWidth}
    />
  );
};

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  minWidth: PropTypes.string,
};

Select.defaultProp = {
  loading: false,
  disabled: false,
  minWidth: "10em",
};

export default Select;
