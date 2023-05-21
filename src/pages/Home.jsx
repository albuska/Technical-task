import MyPhoto from '../components/assets/photo.jpg';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={MyPhoto} alt="Photo" width="350" style={{ paddingTop: 20 }} />

      <TypeWriterEffect
        startDelay={100}
        cursorColor="black"
        text="Hi, I'm Albina Anistratenko. I'm a beginner frontend developer. I want to show you my technical assignment. I invite you to go to the next page. Have a good day!"
        typeSpeed={100}
        eraseSpeed={100}
      />
    </div>
  );
};

export default Home;
