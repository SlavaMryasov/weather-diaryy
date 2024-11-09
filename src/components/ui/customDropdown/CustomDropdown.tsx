import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown";
import "./CustomDropdown.scss";

type Props = {
  onChange: (value: string | null) => void;
} & Omit<DropdownProps, "onChange">;

export const CustomDropdown = (props: Props) => {
  const handleChangeValue = (e: DropdownChangeEvent) => {
    props.onChange(e.target.value);
  };
  return <Dropdown {...props} onChange={handleChangeValue} />;
};
