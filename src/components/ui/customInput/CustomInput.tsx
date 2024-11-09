import { InputText, InputTextProps } from "primereact/inputtext";
import "./CustomInput.scss";

type CustomInputType = {} & InputTextProps;

export const CustomInput = (props: CustomInputType) => {
  return <InputText {...props} />;
};
