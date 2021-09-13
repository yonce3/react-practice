import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
`;

export const HeaderMenu = styled.div`
  display: flex;
  text-align: right;
`;

export const MenuItem = styled.a`
  color: #008c8d;
`;

export const Title = styled.div`
  background-color: #6bc2c3;
`;

export const MainTitle = styled.h1`
  color: white;
`;

export const SubTitle = styled.p`
  color: white;
`;

export const AboutMe = styled.div`
  display: flex;
  height: 200px;
  width: 100vw;
  align-items: center;
  background-image: url('../public/bg-about.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
