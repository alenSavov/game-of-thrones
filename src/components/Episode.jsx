import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

// dummy data
import {singleEpisodeMockData} from "../shared/mockData";

//components
import {useAxios} from "../hooks/useAxios";
import noImageAvailable from "../assets/images/no-picture-available.webp";

const EpisodeDetailsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(239, 241, 244);
`;

const EpisodeWrapper = styled.div`
  width: 90%;
  height: 50vh;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  margin-top: -30px;
  margin-bottom: 30px;
  z-index: 50;
  backdrop-filter: saturate(200%) blur(20px);
  border-radius: 20px;
  overflow: hidden;
`;

const EpisodeImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const EpisodeImage = styled.div`
  position: relative;
  height: 45vh;
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image || noImageAvailable});
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  &:before {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const EpisodeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 10px;
  background: #fff;
  padding: 20px;
  cursor: pointer;
`;

const StyledText = styled.div`
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1rem;
  padding: 5px 0 0 0;
`;

const StyledSubText = styled(StyledText)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 0.8rem;
`;

const EpisodeMainTitle = styled.div`
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.5rem;
  color: #fff;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 0;
`;

const EpisodeSubTitle = styled.div`
  font-weight: 700;
  text-align: left;
  width: 100%;
  padding: 5px 0 10px 0;
  position: relative;
  &:after {
    background: rgba(0, 0, 0, 0.05);
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

const Episode = () => {
  let {id} = useParams();

  //   const {response, loading, error} = useAxios({
  //     url: `/Title/k_8rolfb4c/${id}`,
  //   });

  //   console.log("RESPONCE SINGLE EPISODE", response);

  return (
    <EpisodeDetailsPageWrapper>
      <EpisodeImageWrapper>
        <EpisodeImage
          title={singleEpisodeMockData.title}
          image={singleEpisodeMockData.image}
        />
        <EpisodeMainTitle>{singleEpisodeMockData.title}</EpisodeMainTitle>
      </EpisodeImageWrapper>
      <EpisodeWrapper>
        <EpisodeContent>
          <StyledText>Year {singleEpisodeMockData.year}</StyledText>
          <StyledText>
            Release date {singleEpisodeMockData.releaseDate}
          </StyledText>
          <StyledText>Duration {singleEpisodeMockData.runtimeStr}</StyledText>
          <StyledText>Directors {singleEpisodeMockData.directors}</StyledText>
          <StyledText>Writers {singleEpisodeMockData.writers}</StyledText>
        </EpisodeContent>
      </EpisodeWrapper>
    </EpisodeDetailsPageWrapper>
  );
};

export default Episode;
