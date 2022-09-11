import React, {memo, useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//dummy data
// import {episodesInSeasonMockData} from "../shared/mockData";

import {apiKey} from "../shared/constants";

//components
import Episode from "./Episode";
import Search from "./Search";

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

// dummy data
// const response = episodesInSeasonMockData;
// const loading = false;

const Episodes = () => {
  const [searchParam, setSearchParam] = useState([""]);
  const [searchEpisodesResult, setSearchEpisodeResult] = useState([]);
  const [slice, setSlice] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  let {id} = useParams();

  const [displayEpisodes, setDispalyEpisodes] = useState([]);

  const {response, loading, error} = useAxios({
    url: `/SeasonEpisodes/${apiKey}/tt0944947/${id}`,
  });

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

  useEffect(() => {
    setSlice(6);
    if (response) {
      const res = response.episodes.slice(0, slice).map((episode) => episode);
      setDispalyEpisodes(res);
      setHasMore(true);
    }
  }, [response?.episodes]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledSeasonWrapper>
      <EpisodesWrapper>
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
              {displayEpisodes.map((episode) => (
                <Episode key={episode.id} episode={episode} />
              ))}
            </EpisodesWrapper>
          </InfiniteScroll>
        )}
      </EpisodesWrapper>
    </StyledSeasonWrapper>
  );
};

export default memo(Episodes);
