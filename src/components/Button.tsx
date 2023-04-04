import { Fragment } from "react";

interface Props {
  children: string;
  size: "xs" | "sm" | "m" | "l" | "xl";
  color: "indigo" | "gray" | "emerald" | "blue" | "yellow" | "red";
  type?: "primary" | "secondary" | "soft";
  onClick: () => void;
}

const Button = ({
  children = "Button",
  size = "xs",
  color = "indigo",
  type = "primary",
  onClick,
}: Props) => {
  let classes;

  if (size == "xs") classes = "px-2 py-1 text-xs";
  if (size == "sm") classes = "px-2 py-1 text-sm";
  if (size == "m") classes = "px-2.5 py-1.5 text-sm";
  if (size == "l") classes = "px-3 py-2 text-sm";
  if (size == "xl") classes = "px-3.5 py-2.5 text-sm";

  if (type == "primary")
    classes += ` bg-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`;

  if (type == "secondary")
    classes += ` bg-white text-${color}-900 ring-${color}-300 hover:bg-${color}-50`;

  if (type == "soft")
    classes += ` bg-${color}-50 text-${color}-600 hover:bg-${color}-100`;

  return (
    <Fragment>
      {type == "primary" && (
        <button
          type="button"
          className={
            (classes +=
              " rounded font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2")
          }
          onClick={onClick}
        >
          {children}
        </button>
      )}

      {type == "secondary" && (
        <button
          type="button"
          className={
            (classes += " rounded font-semibold shadow-sm ring-1 ring-inset")
          }
          onClick={onClick}
        >
          {children}
        </button>
      )}

      {type == "soft" && (
        <button
          type="button"
          className={(classes += " rounded font-semibold shadow-sm")}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
