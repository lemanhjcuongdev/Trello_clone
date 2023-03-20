import styled from "styled-components";

export const StyledDropdownMenu = styled.div`
  position: absolute;
  background-color: white;
  right: -234px;
  top: 40px;
  z-index: 10;
  border-radius: 4px;
  width: 272px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid var(--light-grey);
    padding: 10px 0;
    h3 {
      margin-left: 12px;
      font-size: 16px;
      font-weight: normal;
      color: var(--dark-grey);
    }
    button {
      color: black;
      padding: 10px 12px;
    }
  }
  ul {
    list-style: none;
    li {
      padding: 10px 12px;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background-color: var(--light-grey);
      }
    }
  }
`;
