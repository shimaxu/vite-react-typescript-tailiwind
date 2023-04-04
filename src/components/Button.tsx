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

  if (color == "indigo")
    classes +=
      " bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600";

  if (color == "gray")
    classes += " bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600";

  if (color == "emerald")
    classes +=
      " bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600";

  if (color == "blue")
    classes += " bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600";

  if (color == "yellow")
    classes +=
      " bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600";

  if (color == "red")
    classes += " bg-red-600 hover:bg-red-500 focus-visible:outline-red-600";

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
