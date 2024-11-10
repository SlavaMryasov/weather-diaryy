import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { z } from "zod";
import {
  useAddWeatherEntryMutation,
  useGetUsersQuery,
  useGetWeatherTypesQuery,
} from "../../services/weather.api";
import { Button } from "../ui/button/Button";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { Input } from "../ui/input/Input";
import { formatDate } from "../../utils/formatDate";

const weatherEntryFormSchema = z.object({
  temperature: z
    .string()
    .min(1, { message: "Введите температуру" })
    .refine(
      (value) => {
        const temp = Number(value);
        return temp >= -50 && temp <= 60;
      },
      { message: "Температура должна быть от -50 до 60" }
    ),
  weather: z.string().min(3, { message: "Выберите погоду" }),
  submittedBy: z.string().min(3, { message: "Выберите пользователя" }),
  comment: z.string().max(12, { message: "Максимум 12 символов" }).optional(),
});
type FormFields = z.infer<typeof weatherEntryFormSchema>;

type WeatherEntryFormProps = {
  onHide: () => void;
};

export const WeatherEntryForm = ({ onHide }: WeatherEntryFormProps) => {
  const { handleSubmit, formState, control } = useForm<FormFields>({
    defaultValues: {
      comment: "",
      submittedBy: "",
      temperature: "",
      weather: "",
    },
    resolver: zodResolver(weatherEntryFormSchema),
    mode: "onChange",
  });

  const { field: weatherField } = useController<FormFields>({
    name: "weather",
    control,
  });
  const { field: temperatureField } = useController<FormFields>({
    name: "temperature",
    control,
  });
  const { field: submittedByField } = useController<FormFields>({
    name: "submittedBy",
    control,
  });
  const { field: commentField } = useController<FormFields>({
    name: "comment",
    control,
  });

  const { data: users } = useGetUsersQuery();
  const { data: weatherTypes } = useGetWeatherTypesQuery();

  const [addWeatherEntry] = useAddWeatherEntryMutation();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await addWeatherEntry({
      date: formatDate(),
      temperature: parseFloat(data.temperature),
      weather: data.weather,
      submittedBy: data.submittedBy,
      comment: data.comment,
    });
    onHide();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-fluid">
        <div className="field">
          <label htmlFor="temperature">Температура</label>
          <Input
            id="temperature"
            placeholder="Введите температуру"
            className="input"
            {...temperatureField}
          />
          {formState.errors.temperature && (
            <small className="alert-message">
              {formState.errors.temperature.message}
            </small>
          )}
        </div>
        <div className="field">
          <label htmlFor="weather">Погода</label>
          <Dropdown
            id="weather"
            options={weatherTypes || []}
            placeholder="Выберите погоду"
            {...weatherField}
          />
          {formState.errors.weather && (
            <small className="alert-message">
              {formState.errors.weather.message}
            </small>
          )}
        </div>
        <div className="field">
          <label htmlFor="submittedBy">Кто заполнил</label>
          <Dropdown
            id="submittedBy"
            options={users?.map((user) => ({
              label: user.name,
              value: user.name,
            }))}
            placeholder="Выберите пользователя"
            {...submittedByField}
          />
          {formState.errors.submittedBy && (
            <small className="alert-message">
              {formState.errors.submittedBy.message}
            </small>
          )}
        </div>
        <div className="field">
          <label htmlFor="comment">Комментарий</label>
          <Input
            type="text"
            id="comment"
            placeholder="Добавьте комментарий"
            className="input"
            {...commentField}
          />
          {formState.errors.comment && (
            <small className="alert-message">
              {formState.errors.comment.message}
            </small>
          )}
        </div>
        <Button label="Сохранить" className="button" />
      </div>
    </form>
  );
};
