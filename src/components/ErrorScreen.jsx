import React, {memo} from "react";
import styled from "styled-components";
import errorImage from "../assets/images/error.avif";

const StyledErrorWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
`;

const ErrorText = styled.div`
  font-size: 2rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 500px;
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
  background-image: url(${(props) => props.imageUrl});
`;

const ErrorScreen = ({errorMessage}) => {
  return (
    <StyledErrorWrapper>
      <StyledImage imageUrl={errorImage} />
      <ErrorText>Error: {errorMessage}</ErrorText>
    </StyledErrorWrapper>
  );
};

export default memo(ErrorScreen);
