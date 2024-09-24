import PropTypes from 'prop-types';
import React from 'react';

import generateStyledTagColor from "./utils/utils";
import { Wrapper } from './Tags.styles';

const Tags = ({ items, bordered, random }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {generateStyledTagColor(item, bordered, random, index)}
        </React.Fragment>
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