import PropTypes from 'prop-types';
import React from 'react';

import { StyledTag, Wrapper } from './Tags.styles';
import generateRandomColor from "./utils/utils";

const Tags = ({ items, bordered, random }) => {

  return (
    <Wrapper>
      {items.map(item => (
        <StyledTag
          bordered={bordered}
          color={generateRandomColor(random)}
        >
          {item}
        </StyledTag>
      ))}
    </Wrapper>
  );
}

Tags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}

Tags.defaultProps = {
  items: []
}

export default Tags;