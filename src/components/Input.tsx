import type { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-800/50 backdrop-blur-md"
    />
  );
};
