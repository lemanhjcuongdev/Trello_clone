import { ReactNode } from "react";
import { StyledContainer } from "../ListContainer/styles";

interface IListContainer {
  children: ReactNode;
}

function ListContainer(props: IListContainer) {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
}

export default ListContainer;
