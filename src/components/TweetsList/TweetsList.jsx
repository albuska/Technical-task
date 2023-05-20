import { useEffect, useState } from 'react';
import { fetchAllTweets } from '../../services/fetchTweetsAPI';
import { List, Item } from '../TweetItem/TweetItem.styled';
import { TweetItem } from '../TweetItem/TweetItem';
import { ButtonGoBack, Container, ButtonLoadMore } from './TweetsList.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { SelectFilter } from '../SelectFilter';
import Notiflix from 'notiflix';
import { Loader } from '../Loader/Loader';

export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchAllTweets(controller)
      .then(users => {
        console.log(users.length);
        if (users.length === 0) {
          Notiflix.Notify.failure('Oops..There are no tweets =(');
        }
        const pages = Math.ceil(users.length / 12);
        setLoading(true);

        console.log(pages);
        setTweets(users);
        setTotalPages(pages);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  const handleClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const showButton = tweets.length >= 12;

  return (
    <Container>
      <ButtonGoBack to="/">
        <BsArrowLeft /> Go back
      </ButtonGoBack>
      <SelectFilter />
      {error && <h1>{error.message}</h1>}
      <List>
        {tweets &&
          tweets.map(tweet => (
            <Item key={tweet.id}>
              <TweetItem tweet={tweet} />
            </Item>
          ))}
      </List>
      {loading && <Loader />}
      {showButton && !loading && page < totalPages && (
        <ButtonLoadMore type="button" onClick={handleClickLoadMore}>
          Load more
        </ButtonLoadMore>
      )}
    </Container>
  );
};
