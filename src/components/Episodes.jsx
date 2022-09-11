import React, {useEffect, useState} from "react";
import {Routes, Route, useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import {episodesInSeasonMockData} from "../shared/mockData";
import noImageAvailable from "../assets/images/no-picture-available.webp";

//components
import {useAxios} from "../hooks/useAxios";

const StyledSeasonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: rgb(239, 241, 244);
  padding: 30px;
`;

const EpisodesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 20px;
  padding: 10px;
`;

const StyledTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const EpisodeWrapper = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  width: 28rem;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  &:hover {
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.85);
  }
`;

const EpisodeImage = styled.div`
  position: relative;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image || noImageAvailable});
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  &:after {
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

const EpisodeTitle = styled.div`
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.2rem;
  padding: 5px 0 0 0;
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

const StyledStarIcon = styled(StarBorderIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  color: #fff;
  cursor: pointer;
`;

const StyledActiveStarIcon = styled(StarIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  color: #fff;
  cursor: pointer;
`;

const EpisodeSummary = styled.div`
  padding: 20px 0 10px 0;
`;

const Episodes = () => {
  let navigate = useNavigate();
  let {id} = useParams();
  const loadingMock = false;

  const [favorites, setFavorites] = useState([]);

  const handleToggleFavoriteStateClick = (id) => () => {
    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
      return;
    }

    if (favorites.includes(id)) {
      const filteredFavorites = favorites.filter(
        (episodeId) => episodeId !== id
      );
      setFavorites(filteredFavorites);
    }
  };

  const handleOpenEpisodeDetails = (id) => () => {
    console.log("CLICK", id);
    navigate(`/episode/${id}`);
  };

  // 	  const {response, loading, error} = useAxios({
  //     url: `/SeasonEpisodes/k_8rolfb4c/tt0944947/${id}`,
  //   });

  //   console.log("RESPONSE 2", response);
  // console.log("ERROR", error);

  return (
    <StyledSeasonWrapper>
      <EpisodesWrapper>
        <StyledTitle>Game Of Thrones Episodes</StyledTitle>
        {loadingMock === false ? (
          episodesInSeasonMockData.episodes.map((episode) => {
            const isFavorite = favorites.includes(episode.id);
            return (
              <EpisodeWrapper key={episode.id}>
                {isFavorite ? (
                  <StyledActiveStarIcon
                    onClick={handleToggleFavoriteStateClick(episode.id)}
                  />
                ) : (
                  <StyledStarIcon
                    onClick={handleToggleFavoriteStateClick(episode.id)}
                  />
                )}
                <EpisodeImage image={episode.image} />
                <EpisodeContent onClick={handleOpenEpisodeDetails(episode.id)}>
                  <EpisodeTitle>{episode.title}</EpisodeTitle>
                  <EpisodeSubTitle>{`Season ${id} - Episode ${episode.episodeNumber} - Rating: ${episode.imDbRating}`}</EpisodeSubTitle>
                  <EpisodeSummary>{episode.plot}</EpisodeSummary>
                </EpisodeContent>
              </EpisodeWrapper>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </EpisodesWrapper>
    </StyledSeasonWrapper>
  );
};

export default Episodes;
