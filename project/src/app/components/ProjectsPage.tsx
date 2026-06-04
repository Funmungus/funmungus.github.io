import { useTheme } from "../context/ThemeContext";

export function ProjectsPage() {
  const { theme } = useTheme();
  const githubProjects = [
    {
      id: 1,
      title: "Web Application Framework",
      description:
        "A modern web framework built with React and TypeScript, featuring server-side rendering and optimized performance.",
      image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Project+1",
    },
    {
      id: 2,
      title: "API Management Tool",
      description:
        "A comprehensive tool for managing RESTful APIs, including documentation generation and testing capabilities.",
      image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Project+2",
    },
    {
      id: 3,
      title: "Data Visualization Library",
      description:
        "An open-source library for creating interactive charts and graphs with customizable themes and responsive design.",
      image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Project+3",
    },
  ];

  const privateProjects = [
    {
      id: 4,
      title: "Enterprise Dashboard",
      description:
        "A comprehensive analytics dashboard for monitoring business metrics, featuring real-time updates and custom reporting.",
      image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Project+4",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with payment integration, inventory management, and customer analytics.",
      image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Project+5",
    },
    {
      id: 6,
      title: "Content Management System",
      description:
        "A flexible CMS with drag-and-drop page building, multi-language support, and advanced SEO optimization.",
      image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Project+6",
    },
  ];

  return (
    <div className="line-through max-w-7xl mx-auto px-6 py-12 space-y-16">
      <section className="space-y-8">
        <div className="space-y-2">
          <h2
            className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Github Projects
          </h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Open-source contributions and personal projects available on Github.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${theme === "dark" ? "border-gray-800 bg-gray-800/50 hover:shadow-blue-500/10 hover:border-gray-700" : "border-gray-200 bg-white hover:shadow-gray-300 hover:border-gray-300"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3
                  className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2
            className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Private Source
          </h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Proprietary projects and client work with confidential source code.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {privateProjects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${theme === "dark" ? "border-gray-800 bg-gray-800/50 hover:shadow-blue-500/10 hover:border-gray-700" : "border-gray-200 bg-white hover:shadow-gray-300 hover:border-gray-300"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3
                  className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
