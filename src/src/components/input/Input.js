import PropTypes from 'prop-types';
import React from 'react';

import { colorPalette, fontSizes } from '../../constants';
import Typography from '../typography';
import { StyledInput} from './Input.styles';


const Input = ({ id, status, variant, placeHolder, suffix, maxLength, value, defaultValue, onPressEnter, addonBefore, addonAfter, ...rest}) => {

  return (
    <Typography>
        <StyledInput  
            id={id} 
            status={status} 
            variant={variant} 
            suffix={suffix}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            placeHolder={placeHolder}
            onPressEnter={onPressEnter}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            {...rest}>
                
        </StyledInput>
    </Typography>

  );
}

Input.propTypes = {
  id: PropTypes.string,
  status:PropTypes.string,
  variant:PropTypes.string,
  suffix: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  onPressEnter: PropTypes.func,
  addonBefore:PropTypes.string,
  addonAfter:PropTypes.string
}

Input.defaultProps = {
    id:'', 
    status:'',
    variant:'', 
    suffix:'',
    maxLength:20,
    defaultValue: '',
    placeHolder:'Enter a value',
    addonBefore:'',
    addonAfter:'',
    onPressEnter:() => {}
}

export default Input;