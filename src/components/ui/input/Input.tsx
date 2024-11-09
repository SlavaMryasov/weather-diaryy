import {
  InputText as PrimeReactInputText,
  InputTextProps,
} from "primereact/inputtext";
import "./Input.scss";

type CustomInputType = {} & InputTextProps;

export const Input = (props: CustomInputType) => {
  return <PrimeReactInputText {...props} />;
};
