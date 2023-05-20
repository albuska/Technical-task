import { useEffect, useState } from 'react';
import { fetchAllTweets } from '../../services/fetchTweetsAPI';
import { List, Item } from '../TweetItem/TweetItem.styled';
import { TweetItem } from '../TweetItem/TweetItem';
import { ButtonGoBack, Container, ButtonLoadMore } from './TweetsList.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { SelectFilter } from '../SelectFilter';
import Notiflix from 'notiflix';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';

export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);
  const [perPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchAllTweets(controller)
      .then(users => {
        console.log(users.length);
        if (users.length === 0) {
          Notiflix.Notify.failure('Oops..There are no tweets =(');
        }

        setLoading(true);
        setTweets(users);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [perPage]);

  const lastTweetIndex = page * perPage;
  const firstTweetIndex = lastTweetIndex - perPage;
  const currentTweet = tweets.slice(firstTweetIndex, lastTweetIndex);

  const paginate = pageNumber => setPage(pageNumber);

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePrevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const handleClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <ButtonGoBack to="/">
        <BsArrowLeft /> Go back
      </ButtonGoBack>
      <SelectFilter />
      {error && <h1>{error.message}</h1>}
      <List>
        {tweets &&
          currentTweet.map(tweet => (
            <Item key={tweet.id}>
              <TweetItem tweet={tweet} />
            </Item>
          ))}
      </List>
      {loading && <Loader />}
      {tweets && (
        <ButtonLoadMore type="button" onClick={handleClickLoadMore}>
          Load more
        </ButtonLoadMore>
      )}
      <Pagination
        perPage={perPage}
        totalTweets={tweets.length}
        paginate={paginate}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </Container>
  );
};
