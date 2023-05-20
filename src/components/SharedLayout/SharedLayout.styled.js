import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #471ca9;
  font-size: 22px;
  font-weight: 700px;

  &.active {
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  :not(:last-child) {
    margin-right: 100px;
  }
`;

export const Footer = styled.footer`
  padding: 15px 0;
  color: #ffffff;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0;
  padding: 0;
`;

export const LinkNetworks = styled(NavLink)`
  list-style: none;
  svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    :hover {
      fill: #471ca9;
    }
  }
`;