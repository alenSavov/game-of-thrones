import React, {memo, useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import {episodesInSeasonMockData} from "../shared/mockData";
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

const Episodes = () => {
  const [searchParam, setSearchParam] = useState([""]);
  const loadingMock = false;
  let {id} = useParams();

  const {response, loading, error} = useAxios({
    url: `/SeasonEpisodes/${apiKey}/tt0944947/${id}`,
  });

  const search = (episodes) => {
    if (searchParam.length > 0) {
      return episodes.filter((episode) =>
        episode.title
          .toString()
          .toLowerCase()
          .includes(searchParam.toString().toLowerCase())
      );
    } else {
      return episodes;
    }
  };

  return (
    <StyledSeasonWrapper>
      <EpisodesWrapper>
        <StyledTitle>All Episodes from season - {id}</StyledTitle>
        <Search searchParam={searchParam} setSearchParam={setSearchParam} />

        {loading === false ? (
          search(response.episodes).map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </EpisodesWrapper>
    </StyledSeasonWrapper>
  );
};

export default memo(Episodes);
