import styled from "styled-components";
import ActionMenu from "./ActionMenu/ActionMenu";
import Nav from "./Navigation/Nav";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 6px 4px;
  border-bottom: 0.5px solid var(--button-background);
  background-color: rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <HeaderStyle>
      <Nav />
      <ActionMenu />
    </HeaderStyle>
  );
}

export default Header;
