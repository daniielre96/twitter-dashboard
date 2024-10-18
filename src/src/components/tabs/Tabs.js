import PropTypes from 'prop-types';
import React from "react";

import { sizeVariants } from "./constants/variants";
import { StyledTabs } from './Tabs.styles';

const Tabs = ({ size, items, defaultKey }) => {
  
  return(
    <StyledTabs
      defaultActiveKey={defaultKey || items[0].key}
      size={size}
      type="card"
      items ={items}
    />
  )
}

Tabs.propTypes = {
  size: PropTypes.oneOf(Object.values(sizeVariants)),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.string,
      children: PropTypes.node
    })
  ),
  defaultKey: PropTypes.string
}

Tabs.defaultProp = {
  items: [],
  size: 'middle',
  defaultKey: '1'
}

export default Tabs;