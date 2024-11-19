import { ConfigProvider } from 'antd';
import esEs from 'antd/es/locale/es_ES';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledDatePicker } from './DatePicker.styles';

//configure dayjs in spanish
dayjs.locale('es');

const DatePicker = ({disabled, fechaIni, fechaFin, minDate, maxDate}) => {
  
  const format = 'DD-MM-YYYY';
  const fechaInicio = fechaIni ? dayjs(fechaIni, format) : null;
  const fechaFinal = fechaFin ? dayjs(fechaFin, format) : null;
  const minimumDate = minDate ? dayjs(minDate, format) : null;
  const maximumDate = maxDate ? dayjs(maxDate, format) : null;

  return(
    <ConfigProvider locale={esEs}>
      <StyledDatePicker
        format={format}
        placeholder={['Fecha Inicio', 'Fecha Fin']}
        disabled={disabled}
        defaultValue={[fechaInicio, fechaFinal]}
        minDate={minimumDate}
        maxDate={maximumDate}
      />
    </ConfigProvider>
  )
}

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  fechaIni: PropTypes.string,
  fechaFin: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string
}

DatePicker.defaultProp = {
  disabled: false
}

export default DatePicker;