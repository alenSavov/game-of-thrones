import React, {memo} from "react";
import styled from "styled-components";

import {episodesInSeasonMockData} from "../shared/mockData";

//components
import Episode from "./Episode";

//hooks
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

const Episodes = () => {
  const loadingMock = false;

  // const {response, loading, error} = useAxios({
  //   url: `/SeasonEpisodes/k_8rolfb4c/tt0944947/${id}`,
  // });

  //   console.log("RESPONSE 2", response);
  // console.log("ERROR", error);

  return (
    <StyledSeasonWrapper>
      <EpisodesWrapper>
        <StyledTitle>Game Of Thrones Episodes</StyledTitle>
        {loadingMock === false ? (
          episodesInSeasonMockData.episodes.map((episode) => (
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
