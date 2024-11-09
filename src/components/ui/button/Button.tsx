import { ButtonProps, Button as PrimeReactButton } from "primereact/button";
import "./Button.scss";

type Props = {} & ButtonProps;

export const Button = (props: Props) => {
  return <PrimeReactButton {...props} />;
};
