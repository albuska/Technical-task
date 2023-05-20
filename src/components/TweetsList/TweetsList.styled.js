import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 0;
`;

export const ButtonGoBack = styled(Link)`
  text-decoration: none;
  background: #471ca9;
  color: #ffffff;
  padding: 8px 40px;
  border-radius: 3px;

  :hover {
    background: #5736a3;
  }
`;

export const ButtonLoadMore = styled.button`
  background: #471ca9;
  color: #ffffff;
  padding: 8px 40px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  :hover {
    background: #5736a3;
  }
`;
