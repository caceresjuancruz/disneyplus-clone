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
      className={`inline-flex items-center justify-center py-4 mr-3 text-base font-medium text-center text-white rounded-sm hover:bg-indigo-800 focus:ring-0 ease-in-out duration-100 ${
        small ? "text-sm" : ""
      } ${
        outline
          ? "bg-transparent border-2 border-gray-50 rounded-sm hover:bg-gray-50 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  px-5"
          : "bg-indigo-600 px-10 btn-main"
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
