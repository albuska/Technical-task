import PropTypes from 'prop-types';
import { Container, Item, List, PagLinkNumber } from './Pagination.styled';

export const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <Container>
      <List>
        {pageNumbers.map(number => {
          return (
            <Item key={number}>
              <PagLinkNumber href='#' onClick={() => paginate(number)}>
                {number}
              </PagLinkNumber>
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
