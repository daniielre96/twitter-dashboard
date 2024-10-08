import PropTypes from "prop-types";
import React, { useState } from "react";

import { StyledRadioGroup, Wrapper } from "./Radio.Group.styles";
import Radio from "../radio";

const RadioGroup = ({ items, direction }) => {
  const [value, setValue] = useState(0);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const radioGroup = items.map((item) => (
    <Radio value={item.value} label={item.label} key={item.value.toString()} />
  ));

  return (
    <StyledRadioGroup onChange={onChange} value={value}>
      <Wrapper direction={direction}>{radioGroup}</Wrapper>
    </StyledRadioGroup>
  );
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  direction: PropTypes.string,
};

RadioGroup.defaultProp = {
  items: [],
  direction: "row",
};

export default RadioGroup;
