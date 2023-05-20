import PropTypes from 'prop-types';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import {
  Container,
  Item,
  List,
  PagButtonNumber,
  PagButtonArrow,
} from './Pagination.styled';

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
      <PagButtonArrow onClick={handlePrevPage}>
        <BsFillCaretLeftFill />
      </PagButtonArrow>
      <List>
        {pageNumbers.map(number => {
          return (
            <Item key={number}>
              <PagButtonNumber onClick={() => paginate(number)}>
                {number}
              </PagButtonNumber>
            </Item>
          );
        })}
      </List>
      <PagButtonArrow onClick={handleNextPage}>
        <BsFillCaretRightFill />
      </PagButtonArrow>
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
