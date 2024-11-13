import PropTypes from 'prop-types';
import React from 'react';

import { colorPalette, fontSizes } from '../../constants';
import Typography from '../typography';
import { StyledInputNumber} from './InputNumber.styles';


const InputNumber = ({ status, variant, size, placeHolder, maxValue, minValue, readOnly, decimalSeparator, prefix, suffix, maxLength, value, defaultValue, onPressEnter, addonBefore, addonAfter, width, ...rest}) => {

  return (
    <Typography>
        <StyledInputNumber  
            status={status} 
            variant={variant}
            size={size}
            maxValue={maxValue}
            minValue={minValue}
            readOnly={readOnly}
            prefix={prefix} 
            suffix={suffix}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            decimalSeparator={decimalSeparator}
            placeHolder={placeHolder}
            onPressEnter={onPressEnter}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            {...rest}>
                
        </StyledInputNumber>
    </Typography>

  );
}

InputNumber.propTypes = {
  status:PropTypes.string,
  variant:PropTypes.string,
  size:PropTypes.string, //large middle or small
  suffix: PropTypes.object,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  defaultValue: PropTypes.number,
  placeHolder: PropTypes.string,
  onPressEnter: PropTypes.func,
  addonBefore:PropTypes.object,
  addonAfter:PropTypes.object,
  maxValue:PropTypes.number,
  minValue:PropTypes.number,
  readOnly:PropTypes.bool,
  prefix:PropTypes.object,
  decimalSeparator:PropTypes.string,
  size:PropTypes.string
}

InputNumber.defaultProps = {

    maxLength:20,
    placeHolder:'',
    size:'small',
    onPressEnter:() => {}
}

export default InputNumber;