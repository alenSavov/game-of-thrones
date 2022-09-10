import React, {useEffect} from "react";
import {Routes, Route, useParams} from "react-router-dom";
import styled from "styled-components";

import {episodesInSeasonMockData} from "../shared/mockData";
import noImageAvailable from "../assets/images/episodes/no-picture-available.jpg";

//components
import {useAxios} from "../hooks/useAxios";

const StyledSeasonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 20px;
`;

const StyledTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const EpisodeWrapper = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 28rem;
`;

const EpisodeImage = styled.div`
  position: relative;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image || noImageAvailable});
  &:after {
    background: rgba(0, 0, 0, 0.3);
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
  background: #999;
  padding: 20px;
`;

const EpisodeTitle = styled.div`
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.2rem;
  padding: 5px 0;
`;

const EpisodeSubTitle = styled.div`
  text-align: left;
  width: 100%;
`;

const EpisodeSummary = styled.div``;

const Season = () => {
  let {id} = useParams();
  const loadingMock = false;

  // 	  const {response, loading, error} = useAxios({
  //     url: `/SeasonEpisodes/k_8rolfb4c/tt0944947/${id}`,
  //   });

  //   console.log("RESPONSE 2", response);
  // console.log("ERROR", error);

  console.log("EPISODES", episodesInSeasonMockData.episodes);

  return (
    <StyledSeasonWrapper>
      <StyledTitle>Game Of Thrones Episodes</StyledTitle>
      {loadingMock === false ? (
        episodesInSeasonMockData.episodes.map((episode) => (
          <EpisodeWrapper>
            <EpisodeImage image={episode.image} />
            <EpisodeContent>
              <EpisodeTitle>{episode.title}</EpisodeTitle>
              <EpisodeSubTitle>{`Season ${id} - Episode ${episode.episodeNumber} - Rating: ${episode.imDbRating}`}</EpisodeSubTitle>
              <EpisodeSummary>{episode.plot}</EpisodeSummary>
            </EpisodeContent>
          </EpisodeWrapper>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </StyledSeasonWrapper>
  );
};

export default Season;
