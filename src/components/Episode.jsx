import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

// dummy data
import {singleEpisodeMockData} from "../shared/mockData";

//components
import {useAxios} from "../hooks/useAxios";
import noImageAvailable from "../assets/images/no-picture-available.webp";

const EpisodeDetailsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: rgb(239, 241, 244);
`;

const EpisodeImage = styled.div`
  position: relative;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image || noImageAvailable});
  &:after {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
`;

const EpisodeWrapper = styled.div``;

const Episode = () => {
  let {id} = useParams();

  //   const {response, loading, error} = useAxios({
  //     url: `/Title/k_8rolfb4c/${id}`,
  //   });

  //   console.log("RESPONCE SINGLE EPISODE", response);

  return (
    <EpisodeDetailsPageWrapper>
      <div>EPISODE DETAILS</div>
      <EpisodeWrapper>
        <EpisodeImage image={singleEpisodeMockData.image} />
      </EpisodeWrapper>
    </EpisodeDetailsPageWrapper>
  );
};

export default Episode;
