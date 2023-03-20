import styled from "styled-components";

import { StyledButton } from "../Button/styles";
import IButtonProps from "../Button/types";

export const AddCardBtn = styled(StyledButton)<IButtonProps>`
  color: var(--dark-grey);
  &:hover {
    background-color: #091e4214;
  }
`;
