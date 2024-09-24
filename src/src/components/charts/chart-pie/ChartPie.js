import PropTypes from 'prop-types';
import React from 'react';

import { getChartPieConfig } from "./config/config";

import { Pie } from '@ant-design/plots';

const ChartPie = ({ label, items}) => {

  const config = getChartPieConfig(label, items)

  return <Pie {...config} />
}

ChartPie.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number
  }))
}

ChartPie.defaultProp = {
  label: "Default label",
  items: []
}

export default ChartPie;