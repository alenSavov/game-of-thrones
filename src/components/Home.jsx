import React from "react";
import styled from "styled-components";
import {apiKey} from "../shared/constants";

//dummy data
// import {seriesAndSeasonsMockData} from "../shared/mockData";

// components
import MainBanner from "./MainBanner";
import MainSection from "./MainSection";

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
    url: `/Title/${apiKey}/tt0944947`,
  });

  if (error) {
    return <div>Error: {error}</div>;
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
