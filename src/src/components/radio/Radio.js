import PropTypes from "prop-types";
import React from "react";

import { colorPalette, fontSizes } from "../../constants";
import Typography from "../typography";
import { StyledRadio } from "./Radio.styles";

const Radio = ({ value, label }) => {
  return (
    <StyledRadio value={value}>
      <Typography color={colorPalette.primary} weight={fontSizes.BODY_SMALL}>
        {label}
      </Typography>
    </StyledRadio>
  );
};

Radio.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

Radio.defaultProp = {
  value: 0,
  label: "",
};

export default Radio;
