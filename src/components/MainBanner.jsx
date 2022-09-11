import {memo} from "react";
import styled from "styled-components";
import img from "../assets/images/home-page-banner.webp";

const StyledImageItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 45vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 16/9;
  background-image: url(${img});
  &:before {
    background: rgba(0, 0, 0, 0.3);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const MainBanner = () => {
  return <StyledImageItem />;
};

export default memo(MainBanner);
