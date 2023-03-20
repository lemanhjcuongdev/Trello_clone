import styled from "styled-components";

export const StyledCardInput = styled.div`
  margin-bottom: 8px;
  textarea {
    overflow: auto;
    overflow-wrap: break-word;
    resize: none;
    min-height: 54px;
    width: 100%;
    max-height: 100px;
    outline: none;
    border: none;
    padding: 6px 8px;
    background-color: var(--light-grey);
    border-radius: 4px;
    margin-bottom: 8px;
    box-shadow: 0px 1px 1px var(--dark-grey);
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
