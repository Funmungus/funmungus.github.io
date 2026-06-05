import { Link, LinkProps } from "react-router";
import { useTheme } from "../context/ThemeContext";

interface TextLinkProps extends LinkProps {
  invisibility: int;
}

const getThemeTextColors = (theme: string, invisibility: int) => {
  if (invisibility === 0)
    return theme === "dark"
      ? "text-white hover:text-blue-400"
      : "text-black hover:text-blue-600";
  return theme === "dark"
    ? `text-gray-${invisibility} hover:text-blue-400`
    : `text-gray-${1000 - invisibility} hover:text-blue-600`;
};

export function TextLink({
  children,
  invisibility,
  className,
  ...props
}: TextLinkProps) {
  const { theme } = useTheme();
  const modClassName = `${className} transition-colors ${getThemeTextColors(theme, invisibility)}`;

  return (
    <Link className={modClassName} {...props}>
      {children}
    </Link>
  );
}
