import styled from "styled-components";

import IButtonProps from "./types";

export const StyledButton = styled.button`
  color: inherit;
  padding: 6px;
  background-color: var(--button-background);
  display: flex;
  align-items: center;
  color: var(--light-text);
  cursor: pointer;
  border-radius: 3px;
  border: none;
  outline: none;
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: var(--button-background-hover);
  }
  svg + span {
    margin-left: 6px;
  }
`;
export const CustomButton = styled(StyledButton)<IButtonProps>`
  color: var(--dark-text);
  background-color: transparent;
`;
