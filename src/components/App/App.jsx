import { Container } from './App.styled.js';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout.jsx';
import { GlobalStyle } from '../GlobalStyle.jsx';

const Home = lazy(() => import('../../pages/Home.jsx'));
const Tweets = lazy(() => import('../../pages/Tweets.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound.jsx'));

function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
