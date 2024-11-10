import {
  Dropdown as PrimeReactDropdown,
  DropdownProps,
} from "primereact/dropdown";
import "./Dropdown.scss";

type Props = {} & DropdownProps;

export const Dropdown = (props: Props) => {
  return <PrimeReactDropdown {...props} />;
};
