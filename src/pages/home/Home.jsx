
// Home.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [scrollControl, setScrollControl] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }, [scrollControl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollControl(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/wholetree.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <LockImagesWrapper>
          {[...Array(23)].map((_, index) => (
            <LockImage
              key={index}
              src="/source/lock.png"
              alt="Lock"
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </LockImagesWrapper>
        <BottomSection>
          <Title>람쥐람쥐이름이이렇게님의 나무</Title>
          <Under>
            <SquirrelImage src="/source/squirrel/1.png" alt="Squirrel" />
            <RightSection>
              <AcornText>추억 도토리가 25개 쌓이는 중이에요!</AcornText>
              <GiftButton>도토리 선물하기</GiftButton>
            </RightSection>
          </Under>
        </BottomSection>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;

   // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
   @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 375px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;


const LockImagesWrapper = styled.div`
  position: absolute;
  top: 50vh; /* 화면 높이의 절반에서 시작 */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  gap: 8vh; /* 자물쇠들 사이 간격을 화면 높이 기준으로 설정 */
`;

const LockImage = styled.img`
  width: 8vw; /* 자물쇠 크기를 화면 너비 기준으로 설정 */
  height: auto;
  align-self: ${(props) => (props.align === 'left' ? 'flex-start' : 'flex-end')};
  margin-left: ${(props) => (props.align === 'left' ? '5vw' : '0')};
  margin-right: ${(props) => (props.align === 'right' ? '5vw' : '0')};
`;

const BottomSection = styled.div`
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  top: 325vw;
  width: 90%;
  //padding: 10px;
  z-index: 1; /* 다른 요소 위로 오도록 설정 */
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

const Under = styled.div`
  display: flex;
`;

const SquirrelImage = styled.img`
  width: 80px;
  height: auto;
  margin-right: 10px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AcornText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
  margin-bottom: 8px;
`;

const GiftButton = styled.button`
  font-size: 14px;
  color: white;
  background-color: #f9a825;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c78919;
  }
`;
const Nuts = styled.div`
  position: absolute;
  width: 50px; //크기 고정
  height: 30px; //크기 고정
  top: ${(props) => props.top}; /* 위치 조정을 위한 props */
  left: ${(props) => props.left}; /* 위치 조정을 위한 props */
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: white;
`;
