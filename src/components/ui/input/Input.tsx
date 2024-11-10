import {
  InputText as PrimeReactInputText,
  InputTextProps,
} from "primereact/inputtext";
import "./Input.scss";

type Props = {} & InputTextProps;

export const Input = (props: Props) => {
  return <PrimeReactInputText {...props} />;
};
