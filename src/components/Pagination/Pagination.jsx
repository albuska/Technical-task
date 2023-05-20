import PropTypes from 'prop-types';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Container, Item, List, PagButtonNumber } from './Pagination.styled';

export const Pagination = ({
  perPage,
  totalTweets,
  paginate,
  handleNextPage,
  handlePrevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTweets / perPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <PagButtonNumber onClick={handlePrevPage}>
        <BsFillCaretLeftFill />
      </PagButtonNumber>
      <List>
        {pageNumbers.map(number => (
          <Item key={number}>
            <PagButtonNumber onClick={() => paginate(number)}>
              {number}
            </PagButtonNumber>
          </Item>
        ))}
      </List>
      <PagButtonNumber onClick={handleNextPage}>
        <BsFillCaretRightFill />
      </PagButtonNumber>
    </Container>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalTweets: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
};
