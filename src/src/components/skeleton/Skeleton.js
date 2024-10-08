import PropTypes from 'prop-types';
import React from "react";


import { StyledSkeleton} from "./Skeleton.styles";

const Skeleton = ({ children, active, avatar, loading, round, title, rows, width, ...rest}) => {

  return (
    <StyledSkeleton
        active={active}
        avatar={avatar}
        loading={loading}
        paragraph={{rows, width}}
        round={round}
        title={title}
      {...rest}
    >
      {children}
    </StyledSkeleton>
  );
};

Skeleton.propTypes = {
    active: PropTypes.bool,
    avatar: PropTypes.bool,
    loading: PropTypes.bool,
    paragraph: PropTypes.object,
    round: PropTypes.bool,
    title: PropTypes.bool,
    rows: PropTypes.number,
    width: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
  }
  
  Skeleton.defaultProp = {
    active:false,
    avatar:false,
    loading:false,
    round:false,
    title:false,
  }

export default Skeleton;