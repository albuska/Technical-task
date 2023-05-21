import { Suspense } from 'react';
import {
  StyledLink,
  Header,
  Footer,
  Paragraph,
  NetworkList,
  LinkNetworks,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">
            <BsFillHouseDoorFill /> Home
          </StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </Header>
      <hr />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <hr />
        <Paragraph>
          Created by <b>Albina Anistratenko</b>
        </Paragraph>
        <Paragraph>GoIt school</Paragraph>
        <NetworkList>
          <LinkNetworks
            target="_blank"
            to="https://www.instagram.com/albusichka/"
          >
            <BsInstagram />
          </LinkNetworks>
          <LinkNetworks target="_blank" to="https://t.me/albina_anistratenko">
            <FaTelegramPlane />
          </LinkNetworks>
          <LinkNetworks
            target="_blank"
            to="https://www.linkedin.com/in/albina-anistratenko/"
          >
            <RiLinkedinFill />
          </LinkNetworks>
        </NetworkList>
      </Footer>
    </div>
  );
};
