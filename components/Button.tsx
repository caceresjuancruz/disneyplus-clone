"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center mr-3 text-lg font-medium text-center text-white rounded-sm hover:bg-indigo-800 focus:ring-0 ease-in-out duration-100 ${
        small ? "text-sm" : ""
      } ${
        outline
          ? "bg-neutral-950 bg-opacity-20 border-2 border-neutral-50 rounded-sm hover:bg-neutral-50 dark:text-white dark:border-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-black hover:text-black  px-5 py-2"
          : "bg-indigo-600 px-10 py-4 btn-main"
      }`}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
      <style jsx>
        {`
          .btn-main:active {
            transform: scale(0.95);
          }
        `}
      </style>
    </button>
  );
};

export default Button;
