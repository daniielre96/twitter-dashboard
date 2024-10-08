import PropTypes from 'prop-types';
import React from "react";

import Typography from '../typography';
import { StyledCard, WrapperIcons, WrapperStadistics, WrapperTags, WrapperUser, WrapperDescription, WrapperDate, WrapperConfidence, WrapperFooter } from "./Card.styles";
import Icon, { iconSizes } from '../icon';
import Tags from '../tags';
import { colorPalette, fontSizes } from '../../constants';
import * as icons from '@ant-design/icons';

const Card = ({ label, user, nLikes, nRetwits, date, hashtags, loading, confidence, handleClick, ...rest}) => {
    const iconHeart = <Icon className={icons.HeartOutlined} color={colorPalette.pink} size={iconSizes.LARGE}/>;
    const retweetHeart = <Icon className={icons.RetweetOutlined} color={colorPalette.primary} size={iconSizes.LARGE}/>;
  return (
    <StyledCard
    {...rest}
    >
      {user && (
        <WrapperUser><Typography bold={true} color={colorPalette.primary}>@{user}</Typography></WrapperUser>)}
      
      <WrapperDescription> 
      <Typography>{label}</Typography>
      {(nLikes || nRetwits) && ( //si un dels dos ve informat mostara el WrapperIcons
          <WrapperIcons>
            {nLikes && ( //si numero de likes informat mostra el numero de likes
              <WrapperStadistics>
                {iconHeart}
                <Typography bold={true}>{nLikes}</Typography>
              </WrapperStadistics>
            )}
            {nRetwits && (//si numero de retwits informat mostra el numero de retwits
              <WrapperStadistics>
                {retweetHeart}
                <Typography bold={true}>{nRetwits}</Typography>
              </WrapperStadistics>
            )}
          </WrapperIcons>
        )}
        {hashtags?.length > 0 && (//si hi ha hastags informats els mostra
          <WrapperTags>
            <Tags items={hashtags} />
          </WrapperTags>
        )}
        </WrapperDescription>

        <WrapperFooter>

        {date && (
        <WrapperDate><Typography italic= {true} weight={fontSizes.CAPTION} color={colorPalette.primary}>{date}</Typography></WrapperDate>)} 

        {confidence ? (
          <WrapperConfidence><Typography italic={true} weight={fontSizes.CAPTION} color={colorPalette.primary}>{confidence}</Typography></WrapperConfidence>) 
        : (
          <WrapperConfidence onClick={handleClick}><Typography italic={true} weight={fontSizes.CAPTION} color={colorPalette.primary}>Calculate</Typography></WrapperConfidence>
        )}
        </WrapperFooter>
    </StyledCard>
  );
};

Card.propTypes = {
    label:PropTypes.string,
    nLikes:PropTypes.number,
    nRetwits:PropTypes.number,
    date:PropTypes.string,
    hashtargs:PropTypes.arrayOf(PropTypes.string),
    loading:PropTypes.bool,
    user: PropTypes.string,
    confidence: PropTypes.string
}

Card.defaultProp = {
    loading:false
}

export default Card;