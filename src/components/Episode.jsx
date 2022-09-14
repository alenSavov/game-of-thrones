import React, {memo} from "react";
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import {useParams, useNavigate} from "react-router-dom";
import noImageAvailable from "../assets/images/no-image-available.webp";

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

const EpisodeImageWrapper = styled.div`
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  }
`;

const EpisodeLazyLoadImage = styled(LazyLoadImage)``;

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

const Episode = ({episode, handleFavoriteState, isFavorite}) => {
  const navigate = useNavigate();

  const {id} = useParams();

  const handleOpenEpisodeDetails = (id) => {
    navigate(`/episode/${id}`);
  };

  return (
    <EpisodeWrapper key={episode.id}>
      {isFavorite ? (
        <StyledActiveStarIcon onClick={() => handleFavoriteState(episode.id)} />
      ) : (
        <StyledStarIcon onClick={() => handleFavoriteState(episode.id)} />
      )}
      <EpisodeImageWrapper>
        <EpisodeLazyLoadImage
          width="100%"
          height="250"
          effect="blur"
          src={episode.image ?? noImageAvailable}
          alt={episode.title}
        />
      </EpisodeImageWrapper>
      <EpisodeContent onClick={() => handleOpenEpisodeDetails(episode.id)}>
        <EpisodeTitle>{episode.title}</EpisodeTitle>
        <EpisodeSubTitle>{`Season ${id} - Episode ${episode.episodeNumber} - Rating: ${episode.imDbRating}`}</EpisodeSubTitle>
        <EpisodeSummary>{episode.plot}</EpisodeSummary>
      </EpisodeContent>
    </EpisodeWrapper>
  );
};

export default memo(Episode);
