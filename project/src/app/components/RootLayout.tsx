import { Outlet, Link, useLocation } from "react-router";
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function RootLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = "Jonathan Pelletier";

    const favicon = document.querySelector(
      "link[rel='icon']",
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon.png";
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/png";
      newFavicon.href = "/favicon.png";
      document.head.appendChild(newFavicon);
    }
  }, []);

  const getHeaderText = () => {
    if (location.pathname === "/") return "Profile";
    if (location.pathname === "/projects") return "Projects";
    if (location.pathname === "/demos") return "Demos";
    return "Profile";
  };

  const footerLinks = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Link ${i + 1}`,
    href: "/",
  }));

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <header
        className={`border-b py-4 px-6 ${theme === "dark" ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Jonathan Pelletier
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link
                to="/"
                className={
                  theme === "dark"
                    ? "text-gray-300 hover:text-blue-400 transition-colors"
                    : "text-gray-700 hover:text-blue-600 transition-colors"
                }
              >
                Profile
              </Link>
              <Link
                to="/projects"
                className={
                  theme === "dark"
                    ? "text-gray-300 hover:text-blue-400 transition-colors"
                    : "text-gray-700 hover:text-blue-600 transition-colors"
                }
              >
                Projects
              </Link>
              <Link
                to="/demos"
                className={
                  theme === "dark"
                    ? "text-gray-300 hover:text-blue-400 transition-colors"
                    : "text-gray-700 hover:text-blue-600 transition-colors"
                }
              >
                Demos
              </Link>
            </nav>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer
        className={`border-t py-8 px-6 ${theme === "dark" ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-sm text-center transition-colors ${theme === "dark" ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"}`}
          >
            Attributes:
            <ul
              className={`list-group text-sm text-center mb-5 transition-colors ${theme === "dark" ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"}`}
            >
              <li className="list-group-item">
                • favicon:{" "}
                <Link
                  to="https://www.flaticon.com/free-icons/spider-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="spider web icons"
                  className={`text-sm transition-colors ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                >
                  Spider web icons created by Freepik - Flaticon
                </Link>
              </li>
              <li className="list-group-item">
                •{" "}
                <Link
                  to="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="shadcn-ui"
                  className={`text-sm transition-colors ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                >
                  shadcn/ui
                </Link>
              </li>
              <li className="list-group-item">
                •{" "}
                <Link
                  to="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="unsplash"
                  className={`text-sm transition-colors ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                >
                  Unsplash
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`mt-6 pt-6 border-t grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`text-sm transition-colors ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div
            className={`mt-6 pt-6 border-t text-center text-sm ${theme === "dark" ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-500"}`}
          >
            © 2026 Jonathan Pelletier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
