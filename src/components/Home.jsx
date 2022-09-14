import React from "react";
import styled from "styled-components";
import {API_KEY, GAME_OF_THRONES_API_KEY} from "../shared/constants";

//dummy data
// import {seriesAndSeasonsMockData} from "../shared/mockData";

// components
import MainBanner from "./MainBanner";
import MainSection from "./MainSection";
import ErrorScreen from "./ErrorScreen";

//hooks
import {useAxios} from "../hooks/useAxios";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background-color: rgb(239, 241, 244);
`;

// dummy data
// const loading = false;
// const error = undefined;
// const response = seriesAndSeasonsMockData;

const Home = () => {
  const {response, loading, error} = useAxios({
    url: `/Title/${API_KEY}/${GAME_OF_THRONES_API_KEY}`,
  });

  if (error) {
    return <ErrorScreen errorMessage={error} />;
  }

  return (
    <div className="App">
      <Wrapper>
        <MainBanner />
        {loading === false ? (
          <MainSection data={response} />
        ) : (
          <div>Loading...</div>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
