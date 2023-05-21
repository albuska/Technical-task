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

export const PagLinkNumber = styled.a`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  background-color: #471ca9;
  margin-right: 3px;
`;
