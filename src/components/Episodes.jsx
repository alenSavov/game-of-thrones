import React, {memo, useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import {useParams, useNavigate} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//dummy data
import {episodesInSeasonMockData} from "../shared/mockData";

import {
  API_KEY,
  GAME_OF_THRONES_API_KEY,
  LOCAL_STORAGE_KEY_FAVORITES,
} from "../shared/constants";

//components
import Episode from "./Episode";
import Search from "./Search";
import ErrorScreen from "./ErrorScreen";

//hooks
import {useAxios} from "../hooks/useAxios";

const StyledSeasonWrapper = styled.div`
  height: 100%;
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

const StyledButton = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  cursor: pointer;
  z-index: 100;
  font-weight: 700;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
`;

// dummy data
// const response = episodesInSeasonMockData;
// const loading = false;
// const error = undefined;

const Episodes = () => {
  const navigate = useNavigate();
  let {id} = useParams();

  const [favorites, setFavorites] = useState([]);
  const [searchParam, setSearchParam] = useState([""]);
  const [searchEpisodesResult, setSearchEpisodeResult] = useState([]);
  const [displayEpisodes, setDispalyEpisodes] = useState([]);
  const [slice, setSlice] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const {response, loading, error} = useAxios({
    url: `/SeasonEpisodes/${API_KEY}/${GAME_OF_THRONES_API_KEY}/${id}`,
  });

  const handleFavoriteState = (episodeId) => {
    if (!favorites.includes(episodeId)) {
      setFavorites((prev) => [...prev, episodeId]);
      return;
    }

    const filteredResult = favorites.filter(
      (favorite) => favorite !== episodeId
    );

    setFavorites(filteredResult);
  };

  const handleSearch = (searchParam) => {
    setSearchParam(searchParam);
    if (searchParam.length > 0) {
      const filteresEpisodes = response.episodes.filter((episode) =>
        episode.title
          .toString()
          .toLowerCase()
          .includes(searchParam.toString().toLowerCase())
      );

      setSearchEpisodeResult(filteresEpisodes);
      return;
    }

    setSearchEpisodeResult([]);
  };

  const nextSlice = () => {
    return response.episodes.slice(slice, slice + 3).map((episode) => episode);
  };

  const addSlice = () => {
    setDispalyEpisodes([...displayEpisodes, ...nextSlice()]);

    setSlice(slice + 3);
    if (slice >= response.episodes.length) {
      setHasMore(false);
    }
  };

  const handleBackButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    setSlice(6);
    if (response) {
      const res = response.episodes.slice(0, slice).map((episode) => episode);
      setDispalyEpisodes(res);
      setHasMore(true);
    }
  }, [response?.episodes]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES));
    if (data) setFavorites(data);
  }, []);

  useEffect(() => {
    if (favorites?.length) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_FAVORITES,
        JSON.stringify(favorites)
      );
    }
  }, [favorites]);

  if (error) {
    return <ErrorScreen errorMessage={error} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledSeasonWrapper>
      <EpisodesWrapper>
        <StyledButton onClick={handleBackButton}>Back</StyledButton>
        <StyledTitle>All Episodes from season - {id}</StyledTitle>
        <Search searchParam={searchParam} handleSearch={handleSearch} />

        {searchEpisodesResult.length > 0 ? (
          searchEpisodesResult.map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))
        ) : (
          <InfiniteScroll
            dataLength={response.episodes.length}
            next={addSlice}
            scrollThreshold={0.8}
            hasMore={hasMore}
          >
            <EpisodesWrapper>
              {displayEpisodes.map((episode) => {
                const isFavorite = favorites.includes(episode.id);

                return (
                  <Episode
                    key={episode.id}
                    episode={episode}
                    isFavorite={isFavorite}
                    handleFavoriteState={handleFavoriteState}
                  />
                );
              })}
            </EpisodesWrapper>
          </InfiniteScroll>
        )}
      </EpisodesWrapper>
    </StyledSeasonWrapper>
  );
};

export default memo(Episodes);
