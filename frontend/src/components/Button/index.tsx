import { ButtonProps } from "./types";
import { ButtonStyled } from "./styles";

export const Button: React.FC<ButtonProps> = ({ icon, children, ...props }) => {
  return (
    <ButtonStyled type="button" {...props}>
      <div>
        {icon}
        {children}
      </div>
    </ButtonStyled>
  );
};
