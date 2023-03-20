import { StyledButton } from "./styles";
import IButtonProps from "./types";

function Button(props: IButtonProps) {
  const { disabled, children, title, classname, id, onclick } = props;
  return (
    <StyledButton
      disabled={disabled}
      className={classname}
      id={id}
      title={title}
      onClick={onclick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
