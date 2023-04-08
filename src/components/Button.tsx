import tw from "tailwind-styled-components";

interface ButtonProps {
  $type: string;
  $color: string;
  $size: string;
}

function getButtonClasses(type: string) {
  return {
    primary:
      "rounded font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    secondary: "rounded font-semibold shadow-sm ring-1 ring-inset",
    soft: "rounded font-semibold shadow-sm bg-white",
  }[type];
}

function getColor(type: string, color: string) {
  switch (type) {
    case "primary":
      return `bg-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`;

    case "secondary":
      return `text-${color}-900 ring-${color}-300 hover:bg-${color}-50`;

    case "soft":
      return `bg-${color}-50 text-${color}-600 hover:bg-${color}-100`;
  }
}

function getSize(size: string) {
  return {
    xs: "px-2 py-1 text-xs",
    sm: "px-2 py-1 text-sm",
    m: "px-2.5 py-1.5 text-sm",
    l: "px-3 py-2 text-sm",
    xl: "px-3.5 py-2.5 text-sm",
  }[size];
}

const BasicButton = tw.button<ButtonProps>`
  ${(props) =>
    [
      getButtonClasses(props.$type),
      getColor(props.$type, props.$color),
      getSize(props.$size),
    ].join(" ")}
`;

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
  return (
    <BasicButton $type={type} $color={color} $size={size} onClick={onClick}>
      {children}
    </BasicButton>
  );
};

export default Button;
