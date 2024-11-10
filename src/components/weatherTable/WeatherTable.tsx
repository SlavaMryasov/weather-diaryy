import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ProgressSpinner } from "primereact/progressspinner";
import { useState } from "react";
import { useGetWeatherEntriesQuery } from "../../services/weather.api";
import { Button } from "../ui/button/Button";
import "./WeatherTable.scss";
import { MainLayout } from "../ui/layout/MainLayout";
import { WeatherModal } from "../modal/WeatherModal";

const WeatherTable = () => {
  const { data, error, isLoading, refetch } = useGetWeatherEntriesQuery();
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  if (isLoading) return <ProgressSpinner />;
  if (error) return <p>Error loading data.</p>;

  const temperatureBodyTemplate = (rowData: any) => {
    return (
      <span
        className={`temperature-column ${
          rowData.temperature > 35 || rowData.temperature < -10
            ? "alert"
            : "normal"
        }`}
      >
        {rowData.temperature}°C
      </span>
    );
  };

  return (
    <MainLayout>
      <div className="weather-table-container">
        <div className="table-header">
          <h2>Данные о погоде</h2>
          <Button
            className="button"
            label="Добавить запись"
            onClick={() => setIsDialogVisible(true)}
          />
        </div>
        <DataTable value={data || []}>
          <Column field="date" header="Дата и время" />
          <Column
            field="temperature"
            header="Температура"
            body={temperatureBodyTemplate}
          />
          <Column field="weather" header="Погода" />
          <Column field="submittedBy" header="Кто заполнил" />
          <Column field="comment" header="Комментарий" />
        </DataTable>
        <WeatherModal
          visible={isDialogVisible}
          onHide={() => {
            setIsDialogVisible(false);
            refetch();
          }}
        />
      </div>
    </MainLayout>
  );
};

export default WeatherTable;
