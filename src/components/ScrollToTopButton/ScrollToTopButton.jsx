import { TbArrowBigUpLineFilled } from 'react-icons/tb';
import ScrollToTop from 'react-scroll-up';
import { Span } from './ScrollToTopButton.style';

const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop showUnder={160}>
        <Span>
          <TbArrowBigUpLineFilled />
        </Span>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
