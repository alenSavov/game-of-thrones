import React, {useEffect, useLayoutEffect ,useState} from "react";
import styled from "styled-components";
import {useAxios} from "../hooks/useAxios";

import { seriesAndSeasonsMockData } from "../shared/mockData";

// components
import MainBanner from "./MainBanner";
import MainSection from "./MainSection";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background-color: rgb(239, 241, 244);
`;

const Home = () => {
  const loadingMock = false;

  // const {response, loading, error} = useAxios({
  //   url: "/Title/k_8rolfb4c/tt0944947",
  // });
  
  // console.log("RESPONSE", response);
  // console.log("ERROR", error);

  return (
    <div className="App">
      <Wrapper>
        <MainBanner />
        {loadingMock === false ? <MainSection data={seriesAndSeasonsMockData} /> : <div>Loading...</div>}
      </Wrapper>
    </div>
  );
};

export default Home;

