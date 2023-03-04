import React from "react";
import className from "classnames";
import { GoSync } from "react-icons/go";
export default function Button({
  children,
  primary,
  success,
  warning,
  danger,
  outline,
  loading,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border h-8",
    {
      "opacity-80": loading,
      "border-gray-500 bg-gray-300 text-gray": primary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
    }
  );
  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}
