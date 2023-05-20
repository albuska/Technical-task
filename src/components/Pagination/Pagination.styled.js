import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const PagButtonNumber = styled(NavLink)`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-color: #471ca9;
  background-color: ${props => (props.active ? '#471ca9' : 'transparent')};
  color: ${props => (props.active ? '#ffffff' : 'black')};

  /* &.active {
    background-color: #471ca9;
    color: #ffffff;
  } */

  :focus {
    background-color: #471ca9;
    color: #ffffff;
  }

  :hover {
    background-color: #471ca9;
  }
`;

export const PagButtonArrow = styled.button`
  color: black;
  padding: 8px 16px;
  border-color: #471ca9;
  transition: background-color 0.3s;
`;
