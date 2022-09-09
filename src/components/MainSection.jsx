import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const StyledSectionWrapper = styled.div`
  margin-top: -30px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: relative;
  border-radius: 20px;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  backdrop-filter: saturate(200%) blur(20px);
  overflow: hidden;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 10;
`;

const StyledSwiperItem = styled.div`
  //   max-height: 300px;
  //   max-width: 600px;
  height: 30rem;
  overflow: hidden;
  border-radius: 25px;
  background-image: url(https://ychef.files.bbci.co.uk/976x549/p01wzkmh.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainSection = () => {
  const handleOnClick = () => {
    console.log("CLICK");
  };

  return (
    <StyledSectionWrapper>
      <div>Main Section</div>
      <h1>Credo Web</h1>
      <h2>Game of Thrones React js</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <StyledSwiperItem>
            <div style={{color: "#FFF"}}>SLIDE</div>
          </StyledSwiperItem>
        </SwiperSlide>
      </Swiper>
    </StyledSectionWrapper>
  );
};

export default MainSection;
