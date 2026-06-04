import { Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import portraitImg from "../assets/portrait.jpg";

export function IndexPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:funmungus@gmail.com?subject=[${formData.category}]%20${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div
            className={`w-52 h-86 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg ${theme === "dark" ? "shadow-blue-500/20" : "shadow-blue-500/30"}`}
          >
            <img
              className="w-46 h-80 img-thumbnail rounded-full"
              src={portraitImg}
              alt="profile picture"
            ></img>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1
            className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Jonathan Pelletier
          </h1>
          <h2
            className={`text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            Software Engineer
          </h2>
          <p
            className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            I am a full stack developer with game and storytelling interest.
          </p>
          <p
            className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            Welcome to my professional profile. I am a passionate software
            engineer with expertise in building modern web applications. I
            specialize in full-stack development, creating scalable solutions,
            and delivering exceptional user experiences. With a strong
            foundation in both frontend and backend technologies, I bring ideas
            to life through clean, maintainable code.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/funmungus"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              aria-label="Github-funmungus"
            >
              <Github
                className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </a>
            <a
              href="https://github.com/newpsoft"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              aria-label="Github-newpsoft"
            >
              <Github
                className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </a>
            <a
              href="https://linkedin.com/in/jonathan-pelletier-632aa651/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              aria-label="LinkedIn"
            >
              <Linkedin
                className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </a>
            <a
              href="https://discord.gg/AzYER4UgkE"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              aria-label="Discord"
            >
              <MessageCircle
                className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2
          className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Projects
        </h2>
        <p
          className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          I've worked on a diverse range of projects spanning web applications,
          mobile development, and backend systems. My portfolio includes
          enterprise solutions, open-source contributions, and personal projects
          that showcase my technical skills and creative problem-solving
          abilities. Each project represents a unique challenge and opportunity
          for growth.
        </p>
      </section>

      <section className="space-y-4">
        <h2
          className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Experience
        </h2>
        <p
          className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Throughout my career, I have collaborated with talented teams to
          deliver high-quality software solutions. My experience includes
          working with modern frameworks, implementing best practices, and
          continuously learning new technologies. I thrive in dynamic
          environments where innovation and collaboration drive success. I am
          committed to writing clean, well-documented code and mentoring junior
          developers.
        </p>
      </section>

      <section className="space-y-4">
        <h2
          className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Demos
        </h2>
        <p
          className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Explore live demonstrations of my work, showcasing interactive
          features, responsive designs, and innovative solutions. These demos
          highlight my ability to transform concepts into functional
          applications with attention to detail and user experience. Each demo
          represents hours of refinement and optimization to ensure the best
          possible performance.
        </p>
      </section>

      <section className="space-y-6">
        <h2
          className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              Category
            </label>
            <select
              id="category"
              required
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"}`}
            >
              <option value="">Select a category</option>
              <option value="general">General Inquiry</option>
              <option value="collaboration">Collaboration Opportunity</option>
              <option value="consulting">Consulting Request</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`}
            />
          </div>

          <button
            type="submit"
            className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg ${theme === "dark" ? "shadow-blue-500/20" : "shadow-blue-500/30"}`}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
