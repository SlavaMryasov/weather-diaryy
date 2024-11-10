import { Dialog } from "primereact/dialog";
import ReactDOM from "react-dom";
import { WeatherEntryForm } from "../weatherEntryForm/WeatherEntryForm";
import "./WeatherModal.scss";

type WeatherModalProps = {
  visible: boolean;
  onHide: () => void;
};

export const WeatherModal = ({ visible, onHide }: WeatherModalProps) => {
  return visible
    ? ReactDOM.createPortal(
        <Dialog
          className="weather-entry-form-dialog"
          header="Добавить запись"
          visible={visible}
          onHide={onHide}
        >
          <WeatherEntryForm onHide={onHide} />
        </Dialog>,
        document.getElementById("modal-container")!
      )
    : null;
};
