import styled from "styled-components";

export const StyledBoardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
`;

export const LeftBoardHeading = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    padding: 0 12px;
    color: var(--light-text);
    &:hover {
      background-color: var(--button-background-hover);
    }
  }
  .star:hover {
    color: yellow;
  }
  & > * {
    margin: 0px 4px;
  }
  .board {
    background-color: var(--light-button-background);
    color: var(--dark-text);
  }
`;
export const BoadDivider = styled.span`
  border-left: 1px solid var(--button-background);
  float: left;
  height: 16px;
  margin: 8px 4px;
`;
export const RightBoardHeading = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0px 4px;
  }
  .share {
    background-color: var(--light-text);
    color: var(--dark-text);
  }
`;
