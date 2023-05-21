import { useState } from 'react';
import { Container, StyledSelect } from './SelectFilter.styled';
import PropTypes from 'prop-types';
import { TweetItem } from '../components/TweetItem/TweetItem';
import { List, Item } from '../components/TweetItem/TweetItem.styled';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const SelectFilter = ({ tweets }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = e => {
    console.log(e.value);
    setSelectedFilter(e.value);
  };

  const filteredTweets = tweets.filter(tweet => {
    if (selectedFilter === 'all') {
      return true;
    } else if (selectedFilter === 'follow') {
      return !tweet.isFollowing;
    } else if (selectedFilter === 'followings') {
      return tweet.isFollowing;
    }
    return false;
  });

  return (
    <Container>
      <StyledSelect
        placeholder="Сhoose tweets by filter..."
        value={selectedFilter}
        onChange={handleFilterChange}
        options={options}
      />

      <List>
        {filteredTweets.map(tweet => (
          <Item key={tweet.id}>
            <TweetItem tweet={tweet} />
          </Item>
        ))}
      </List>
    </Container>
  );
};

SelectFilter.propTypes = {
  tweets: PropTypes.array.isRequired,
};
