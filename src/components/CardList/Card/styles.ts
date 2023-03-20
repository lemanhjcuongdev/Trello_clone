import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 6px 8px;
  background-color: var(--light-grey);
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 1px var(--dark-grey);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  .edit_control {
    display: flex;
    button {
      margin-right: 10px;
    }
  }
  textarea {
    width: 100%;
    overflow: hidden;
    resize: none;
    overflow-wrap: break-word;
    height: 30px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 4px;
    &:focus {
      background-color: white;
      outline-color: var(--feature-button-background);
    }
  }
  button.edit_card {
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: var(--light-grey);
    z-index: 5;
    display: none;
    &:hover {
      background-color: var(--grey);
    }
  }
  button.save_card,
  button.delete_card {
    background-color: var(--feature-button-background);
  }
  &:hover {
    background-color: #e9e9e9;
  }
  &:hover > button {
    display: block;
  }
  svg {
    font-size: 14px;
    color: var(--dark-grey);
    line-height: 20px;
  }
  span {
    position: relative;
    margin-bottom: 4px;
    word-wrap: break-word;
    clear: both;
    display: block;
    overflow: hidden;
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    z-index: 4;
  }
`;
