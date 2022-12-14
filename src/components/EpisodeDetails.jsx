import React, {memo, useCallback} from "react";
import {useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {API_KEY} from "../shared/constants";

// dummy data
// import {singleEpisodeMockData} from "../shared/mockData";

//components
import noImageAvailable from "../assets/images/no-image-available.webp";
import ErrorScreen from "./ErrorScreen";

//hooks
import {useAxios} from "../hooks/useAxios";

const EpisodeDetailsPageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  background-color: rgb(239, 241, 244);
`;

const EpisodeWrapper = styled.div`
  width: 90%;
  //   height: 100%;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  margin-top: -30px;
  margin-bottom: 30px;
  backdrop-filter: saturate(200%) blur(20px);
  border-radius: 20px;
  overflow: hidden;
`;

const EpisodeImageWrapper = styled.div`
  width: 100%;
  height: 45vh;
  position: relative;
`;

const EpisodeImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image || noImageAvailable});
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.55);
  &:before {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

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

const StyledText = styled.div`
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1rem;
  padding: 5px 0;
`;

const StyledSubText = styled(StyledText)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 0.8rem;
`;

const EpisodeMainTitle = styled.div`
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.5rem;
  color: #fff;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 0;
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

const EpisodeDetails = () => {
  const navigate = useNavigate();
  let {id} = useParams();

  // const loading = false;
  // const error = undefined;
  // const response = singleEpisodeMockData;

  const {response, loading, error} = useAxios({
    url: `/Title/${API_KEY}/${id}`,
  });

  const handleBackButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (error) {
    return <ErrorScreen errorMessage={error} />;
  }

  return (
    <EpisodeDetailsPageWrapper>
      <StyledButton onClick={handleBackButton}>Back</StyledButton>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <EpisodeImageWrapper>
            <EpisodeImage title={response.title} image={response.image} />
            <EpisodeMainTitle>{response.title}</EpisodeMainTitle>
          </EpisodeImageWrapper>
          <EpisodeWrapper>
            <EpisodeContent>
              <StyledText>
                Year: <StyledSubText>{response.year}</StyledSubText>
              </StyledText>
              <StyledText>
                Release date:{" "}
                <StyledSubText>{response.releaseDate}</StyledSubText>
              </StyledText>
              <StyledText>
                Duration:
                <StyledSubText>
                  <StyledSubText>{response.runtimeStr}</StyledSubText>
                </StyledSubText>
              </StyledText>
              <StyledText>
                Directors: <StyledSubText>{response.directors}</StyledSubText>
              </StyledText>
              <StyledText>
                Writers: <StyledSubText>{response.writers}</StyledSubText>
              </StyledText>
              <StyledText>
                Genres: <StyledSubText>{response.genres}</StyledSubText>
              </StyledText>
              <StyledText>
                Summery <StyledSubText>{response.plot}</StyledSubText>
              </StyledText>
            </EpisodeContent>
          </EpisodeWrapper>
        </>
      )}
    </EpisodeDetailsPageWrapper>
  );
};

export default memo(EpisodeDetails);
