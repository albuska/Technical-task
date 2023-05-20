import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const BoxMain = styled.div`
  margin: 20px 0;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 50px;
`;
export const Item = styled.li`
  list-style: none;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 66px;
  height: 66px;
  z-index: 1;
`;

export const ImageLogo = styled.img`
  position: absolute;
  left: 20px;
`;

export const ImageBgColor = styled.img`
  margin-bottom: 50px;
`;

export const ImageRectangle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ImageEllipse = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BoxText = styled.div`
  display: grid;
  flex-direction: column;
  align-items: end;
`;

export const Button = styled.button`
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  width: 196px;
  margin: 0 auto;
`;
