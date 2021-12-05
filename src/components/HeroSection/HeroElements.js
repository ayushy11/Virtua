import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
  --o-object-fit: cover;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  padding: 8px 24px;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.875rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
