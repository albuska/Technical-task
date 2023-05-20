import MyPhoto from '../components/assets/photo.jpg';
// import Typical from 'react-typical';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={MyPhoto} alt="Photo" width="350" style={{ paddingTop: 20 }} />
      <h1>
        {/* <Typical
          steps={[
            "Hi, I'm Albina Anistratenko. I'm a begginer frontend developer. I want to show you my technical assignment. I invite you to go to the next page. Have a good day!",
            2000,
          ]}
          loop={Infinity}
          wrapper="b"
        /> */}
        {/* <Typical
          steps={[
            "Hi, I'm Albina Anistratenko.",
            2000,
            "I'm a begginer frontend developer.",
            2000,
            'I want to show you my technical assignment.',
            2000,
            'I invite you to go to the next page.',
            2000,
            'Have a good day!',
            2000,
          ]}
          loop={Infinity}
          wrapper="b"
        /> */}
      </h1>
    </div>
  );
};

export default Home;
