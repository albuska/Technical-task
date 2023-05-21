import PropTypes from 'prop-types';
import { Container, Item, List, PagButtonNumber } from './Pagination.styled';

export const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <Container>
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
    </Container>
  );
};

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  pageNumbers: PropTypes.array.isRequired,
};
