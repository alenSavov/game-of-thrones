import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useAxios} from "../hooks/useAxios";

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
  const [seasons, setSeasons] = useState();

  // const {response, loading, error} = useAxios({
  //   url: "/Title/k_8rolfb4c/tt0944947",
  // });

  // useEffect(() => {
  //   if (response?.tvSeriesInfo) {
  //     setSeasons(response.tvSeriesInfo.seasons);
  //   }
  // }, [response]);

  // console.log("RESPONSE", response);

  return (
    <div className="App">
      <Wrapper>
        <MainBanner />
        <MainSection />
      </Wrapper>
    </div>
  );
};

export default Home;
