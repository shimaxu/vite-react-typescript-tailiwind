interface Props {
  children: string;
  size: "xs" | "sm" | "m" | "l" | "xl";
  color: "indigo" | "gray" | "emerald" | "blue" | "yellow" | "red";
  onClick: () => void;
}

const Button = ({
  children = "Button",
  size = "xs",
  color = "indigo",
  onClick,
}: Props) => {
  let classes;

  if (size == "xs") classes = "px-2 py-1 text-xs";
  if (size == "sm") classes = "px-2 py-1 text-sm";
  if (size == "m") classes = "px-2.5 py-1.5 text-sm";
  if (size == "l") classes = "px-3 py-2 text-sm";
  if (size == "xl") classes = "px-3.5 py-2.5 text-sm";

  classes += ` bg-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`;

  return (
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
  );
};

export default Button;
