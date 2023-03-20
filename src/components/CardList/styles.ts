import styled from "styled-components";

export const StyledList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 4px;
  width: 272px;
  min-width: 272px;
  background-color: var(--light-button-background);
  max-height: 99%;
  height: fit-content;
  padding: 10px;
  border-radius: 4px;
  &:first-child {
    margin-left: 12px;
  }
`;
