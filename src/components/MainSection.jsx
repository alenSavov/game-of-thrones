import React, {useState, useCallback} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { seasonsWallpaper } from "../shared/constants";

//components
import useWindowSize from "../hooks/useWindowSize";

const StyledSectionWrapper = styled.div`
  margin-top: -30px;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: relative;
  border-radius: 20px;
  padding: 30px 36px 40px 36px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  backdrop-filter: saturate(200%) blur(20px);
  overflow: hidden;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 10;
`;

const StyledSwiperItem = styled.div`
  height: 25rem;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url(${(props) => props.imageUrl || 'https://ychef.files.bbci.co.uk/976x549/p01wzkmh.jpg'});
  box-shadow: 0px -1px 10px 0px rgba(0,0,0,0.75);
  margin: 30px 0px;
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

const SwiperItemContentWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledTitle = styled.div`
  color: #FFF;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3.60rem;
  `
  
const StyledSubTitle = styled(StyledTitle)`
  font-size: 1.42rem;
`

const getSlidePerView = (windowWith) => {
  if (windowWith > 768 && windowWith < 1024) {
    return 3;
  }
  if (windowWith > 576 && windowWith < 768) {
    return 2;
  }
  if (windowWith <= 576) {
    return 1;
  }

  return 4;
};

const MainSection = ({data}) => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  let slidePerView = getSlidePerView(windowWidth);

  const handleOnClick = () => {
    console.log("CLICK");
  };

  return (
    <StyledSectionWrapper>
      <h1>Game of Thrones</h1>
      <h2>Seasons</h2>

      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.tvSeriesInfo.seasons.map((season, i) => (
          <SwiperSlide key={`Season-${season}`}>
            <StyledSwiperItem style={{backgroundImage: `url(${seasonsWallpaper[i]})`}}>
              <SwiperItemContentWrapper>
                <StyledTitle>{season}</StyledTitle>
                <StyledSubTitle>Season</StyledSubTitle>
              </SwiperItemContentWrapper>
            </StyledSwiperItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSectionWrapper>
  );
};

export default MainSection;
