import classNames from "classnames";
import { useField } from "formik";
import { InputHTMLAttributes } from "react";

type InputProps = { error?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { error, className, ...rest } = props;

  return (
    <input
      className={classNames(className, "rounded border px-2 py-2 text-xl", {
        "border-gray-300": !error,
        "border-red-500": error,
      })}
      {...rest}
    />
  );
};

type FormikInputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormikInput = (props: FormikInputProps) => {
  const [, { error, value }, { setValue }] = useField(props.name);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={error}
      {...props}
    />
  );
};

export default FormikInput;
