import { MouseEventHandler, ReactNode } from "react";

export default interface IButtonProps {
  disabled?: boolean;
  children?: ReactNode;
  title?: string;
  classname?: string;
  id?: string;
  onclick?: MouseEventHandler;
}
