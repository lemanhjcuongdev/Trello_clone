import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
export const Li = styled.li`
  height: 31px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: var(--light-text);
  margin-right: 4px;
  border-radius: 6px;
  font-weight: 400;
  user-select: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  span {
    margin-right: 6px;
  }
  &.create-btn {
    background-color: var(--button-background);
    color: var(--light-text);
    button {
      cursor: pointer;
    }
  }
  &.create-btn:hover {
    background-color: var(--button-background-hover);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif; ;
`;
