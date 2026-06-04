import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";

export function DemosPage() {
  const { theme } = useTheme();
  const demos = [
    {
      id: 1,
      title: "Interactive Portfolio Showcase",
      description:
        "An immersive portfolio experience featuring smooth animations, parallax scrolling, and dynamic content loading. This demo showcases modern web design principles and advanced CSS techniques to create an engaging user experience that adapts beautifully across all device sizes.",
      image: "https://via.placeholder.com/800x450/3b82f6/ffffff?text=Demo+1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Real-time Collaboration Tool",
      description:
        "A demonstration of real-time collaborative editing capabilities using WebSocket connections. Multiple users can interact simultaneously with live cursor tracking, instant updates, and conflict resolution. This demo highlights the power of modern real-time technologies in creating seamless collaborative experiences.",
      image: "https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Demo+2",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "AI-Powered Data Insights",
      description:
        "An intelligent dashboard that leverages machine learning to provide predictive analytics and actionable insights. Features include interactive data visualizations, automated trend detection, and natural language querying. This demo illustrates how AI can transform raw data into meaningful business intelligence.",
      image: "https://via.placeholder.com/800x450/10b981/ffffff?text=Demo+3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 line-through">
      {demos.map((demo, index) => (
        <section
          key={demo.id}
          className={`space-y-6 ${index !== 0 ? `pt-16 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}` : ""}`}
        >
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src={demo.image}
                alt={demo.title}
                className={`w-24 h-24 object-cover rounded-lg shadow-md ${theme === "dark" ? "shadow-blue-500/10" : "shadow-gray-300"}`}
              />
            </Link>
            <Link
              to="/"
              className={`text-3xl font-bold transition-colors ${theme === "dark" ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}
            >
              {demo.title}
            </Link>
          </div>

          <div
            className={`aspect-video w-full rounded-lg overflow-hidden shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <iframe
              src={demo.videoUrl}
              title={demo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p
            className={`leading-relaxed text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            {demo.description}
          </p>
        </section>
      ))}
    </div>
  );
}
