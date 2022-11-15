import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { useAppDispatch } from "../../hooks";
import { IForm, setData } from "../../store/slices/searchSlice";

import styles from "./Search.module.scss";

interface IInput {
  id: "where" | "whereDate" | "toDate" | "to";
  label: string;
  placeholder: string;
  isRequired?: boolean;
}

const inputText: IInput[] = [
  {
    id: "where",
    label: "Откуда",
    placeholder: "Город вылета",
    isRequired: true,
  },
  {
    id: "to",
    label: "Куда",
    placeholder: "Город прилёта",
    isRequired: true,
  },
];

const inputDate: IInput[] = [
  {
    id: "whereDate",
    label: "Туда",
    placeholder: "дд.мм.гг",
    isRequired: true,
  },
  {
    id: "toDate",
    label: "Обратно",
    placeholder: "дд.мм.гг",
    isRequired: false,
  },
];

const Search: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm<IForm>({
    mode: "onChange",
    defaultValues: {
      where: "",
      to: "",
      whereDate: "",
      toDate: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    dispatch(setData(data));
    navigate("/avia/info");
  };

  return (
    <div className={styles.root}>
      <form
        id="form"
        className={styles.header}
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputText.map(({ id, label, placeholder, isRequired }) => (
          <Input key={id}>
            <Input.Label htmlFor={id} label={label} />
            <Controller
              name={id}
              control={control}
              rules={{ required: isRequired }}
              render={({ field }) => (
                <Input.Text placeholder={placeholder} id={id} {...field} />
              )}
            />
          </Input>
        ))}

        <div className={styles.group}>
          {inputDate.map(({ id, label, placeholder, isRequired }) => (
            <Input key={id}>
              <Input.Label htmlFor={id} label={label} />
              <Controller
                name={id}
                control={control}
                rules={{ required: isRequired }}
                render={({ field }) => (
                  <Input.Text
                    icon
                    placeholder={placeholder}
                    id={id}
                    {...field}
                  />
                )}
              />
            </Input>
          ))}
        </div>
      </form>

      <div className={styles.footer}>
        <Button>
          <Button.Primary
            form="form"
            disabled={!isValid}
            label="Найти билеты"
          />
        </Button>
      </div>
    </div>
  );
};

export default Search;
