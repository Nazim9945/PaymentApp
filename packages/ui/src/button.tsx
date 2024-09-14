"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode,
  appName:string
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="bg-red-800 text-blue-900 p-2 text-xl rounded-md shadow-lg"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
