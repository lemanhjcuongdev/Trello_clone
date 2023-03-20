import styled from "styled-components";

export const StyledAddColumn = styled.div`
  width: 272px;
  min-width: 272px;
  margin: 0 8px 0 4px;
  & > button {
    width: 100%;
  }
`;
export const StyledColumnInput = styled.div`
  width: 272px;
  background-color: var(--light-button-background);
  padding: 4px;
  margin: 0 8px 0 4px;
  border-radius: 4px;
  input {
    width: 100%;
    outline: none;
    border: 2px solid var(--feature-button-background);
    padding: 6px 8px;
    background-color: var(--light-grey);
    border-radius: 4px;
    margin-bottom: 8px;
    font-family: inherit;
  }
  div {
    display: flex;
    .add {
      background-color: var(--feature-button-background);
    }
    .cancel {
      color: var(--dark-grey);
      background-color: transparent;
      margin-left: 10px;
      font-size: 20px;
      &:hover {
        color: black;
      }
    }
  }
`;
