import PropTypes from 'prop-types';
import React from 'react';

import { colorPalette, fontSizes } from '../../constants';
import Typography from '../typography';
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
          <Typography color={colorPalette.primary} weight={fontSizes.BODY_SMALL}>{item}</Typography>
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