import PropTypes from 'prop-types';
import {
  Button,
  Container,
  AvatarImg,
  BoxMain,
  ImageBgColor,
  ImageRectangle,
  ImageLogo,
  ImageEllipse,
  BoxText,
} from './TweetItem.styled';
import { useState } from 'react';
import DefaultImage from '../assets/defaultImage.jpg';
import Logo from '../assets/logo.png';
import BgImage from '../assets/mainBgImage.png';
import Rectangle from '../assets/rectangle.png';
import Ellipse from '../assets/ellipse.png';

export const TweetItem = ({ tweet }) => {
  const [isFollowing, setIsFollowing] = useState(tweet.isFollowing);
  const [followers, setFollowers] = useState(tweet.followers);

  const handleClickChangeFollow = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowers(followers + 1);
    } else {
      setIsFollowing(false);
      setFollowers(followers - 1);
    }
  };

  return (
    <Container>
      <BoxMain>
        <ImageLogo src={Logo} alt="Logo" width="76" height="22" />
        <ImageRectangle src={Rectangle} alt="Rectangle" />
        <ImageEllipse src={Ellipse} alt="Ellipse" />
        <ImageBgColor src={BgImage} alt="BgImage" />
      </BoxMain>
      <AvatarImg
        src={tweet.avatar ? tweet.avatar : DefaultImage}
        alt={tweet.user}
      />
      <BoxText>
        <p>{tweet.tweets} TWEETS</p>
        <p>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} FOLLOWERS
        </p>

        <Button
          style={
            isFollowing ? { background: '#5CD3A8' } : { background: '#ebd8ff' }
          }
          type="button"
          onClick={handleClickChangeFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </BoxText>
    </Container>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
