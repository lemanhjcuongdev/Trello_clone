import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
export const Li = styled.li`
  padding: 6px 8px;
  cursor: pointer;
  margin-right: 2px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: var(--light-text);
  border-radius: 86px;
  font-weight: 400;
  user-select: none;
  &:hover {
    background-color: var(--button-background);
  }
  span {
    margin-right: 6px;
  }
  &.create-btn {
    background-color: var(--button-background);
    color: var(--light-text);
  }
  &.input_search {
    height: 32px;
    padding: 0 12px 0 30px;
    border-radius: 6px;
    position: relative;
    border: 0.5px solid var(--light-grey);
    background-color: var(--button-background);
    svg {
      position: absolute;
      left: 8px;
    }
    &.input_search:hover {
      background-color: rgba(255, 255, 255, 0.402);
    }
  }
  input {
    background-color: transparent;
    outline: none;
    border: none;
    color: inherit;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: inherit;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: inherit;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: inherit;
    }
  }
`;
export const LogoDiv = styled.div`
  width: 75px;
  height: 31px;
  background-image: url("https://a.trellocdn.com/prgb/assets/d947df93bc055849898e.gif");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  &:hover {
    background-image: url("https://a.trellocdn.com/prgb/assets/87e1af770a49ce8e84e3.gif");
  }
`;
export const ButtonStyle = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: inherit;
  font-size: inherit;
`;
