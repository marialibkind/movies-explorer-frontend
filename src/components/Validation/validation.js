import { useForm } from "react-hook-form";

export function Validation() {
  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  return { register, reset, setValue, watch, handleSubmit, errors, isValid };
}

export function checkError(error) {
  if (error === "name") {
    return {
      type: String,
      required: "Поле обязательно для заполнения",
      minLength: { value: 2, message: "Введите минимум два символа" },
      pattern: {
        value: /^[a-zA-Zа-яА-Я0-9 -]+$/u,
        message: "Введены некорректные символы",
      },
    };
  }
  if (error === "email") {
    return {
      type: String,
      required: "Поле обязательно для заполнения",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        message: "Введен некорректный email",
      },
    };
  }
  if (error === "password") {
    return {
      type: String,
      required: "Поле обязательно для заполнения",
      minLength: { value: 8, message: "Введите минимум восемь символов" },
      pattern: { value: /^\S*$/, message: "Введены некорректные символы" },
    };
  }
}
