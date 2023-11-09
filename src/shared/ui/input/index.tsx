import React, {FocusEventHandler, FormEvent, ReactNode} from "react";

interface Props {
  value?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<any> | undefined;
  label?: string;
  touched?: boolean;
  error?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  endDecorator?: ReactNode;
  maxLength?: number;
}

export const BaseInput = ({
  value,
  onChange,
  onBlur,
  label,
  type = "text",
  name,
  placeholder,
  endDecorator,
  maxLength,
}: Props) => {
  return (
    <div className="flex w-full">
      <div className="">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="flex w-full items-center border border-x-0 border-t-0 border-white p-2 [&>input]:focus:bg-white">
        <input
          maxLength={maxLength}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full bg-transparent p-0 text-white focus:outline-0"
        />
        <div>{endDecorator}</div>
      </div>
    </div>
  );
};
