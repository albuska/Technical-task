import { useState } from 'react';
import { Button } from './ScrollToTopButton.style';
import { TbArrowBigUpLineFilled } from 'react-icons/ri';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div>
      {isVisible && <Button onClick={scrollToTop}>
      <TbArrowBigUpLineFilled/>
      </Button>}
    </div>
  );
};

export default ScrollToTopButton;
