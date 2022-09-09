import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  margin-top: -30px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: relative;
  border-radius: 20px;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  backdrop-filter: saturate(200%) blur(20px);
  overflow: hidden;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 10;
`;

const MainSection = () => {
  return (
    <StyledSectionWrapper>
      <div>Main Section</div>
      <h1>Credo Web</h1>
      <h2>Game of Thrones React js</h2>
    </StyledSectionWrapper>
  );
};

export default MainSection;
