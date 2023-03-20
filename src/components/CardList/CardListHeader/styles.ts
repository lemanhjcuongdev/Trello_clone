import styled from "styled-components";

export const StyledListHeader = styled.div`
  height: 100% !important;
  display: flex;
  justify-content: space-between;
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 4px;
  textarea {
    overflow: hidden;
    resize: none;
    overflow-wrap: break-word;
    height: 30px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    &:focus {
      background-color: white;
      outline-color: var(--feature-button-background);
    }
  }
`;
