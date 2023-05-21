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
  const [setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchAllTweets(controller)
      .then(users => {
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
  }, []);

  const sliceListOfTweets = tweets.slice(0, perPage);

  const paginate = pageNumber => setPage(pageNumber);

  const handleClickLoadMore = () => {
    setPerPage(perPage + perPage);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tweets.length / perPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ButtonGoBack to="/">
        <BsArrowLeft /> Go back
      </ButtonGoBack>
      <SelectFilter />
      {error && <h1>{error.message}</h1>}
      <List>
        {tweets &&
          sliceListOfTweets.map(tweet => (
            <Item key={tweet.id}>
              <TweetItem tweet={tweet} />
            </Item>
          ))}
      </List>
      {loading && <Loader />}
      {tweets && (
        <ButtonLoadMore
          type="button"
          onClick={() => handleClickLoadMore()}
          hidden={pageNumbers.length === 1}
        >
          Load more
        </ButtonLoadMore>
      )}
      <Pagination pageNumbers={pageNumbers} paginate={paginate} />
    </Container>
  );
};
