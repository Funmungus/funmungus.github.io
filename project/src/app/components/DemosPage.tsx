import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { TextLink } from "./TextLink";
import MacropusImg from "../assets/Macropus.svg";
import DeckSimImg from "../assets/DeckSim.png";

export function DemosPage() {
  const { theme } = useTheme();
  const demos = [
    {
      id: 1,
      title: "Macropus-Libmacro",
      href: null,
      description:
        "Work in progress, not yet available. A system to record and trigger macros, by hotkey or floating button. Show visual configuration, hotkey trigger, and recording a keyboard macro.",
      image: MacropusImg,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "DeckSim",
      href: null,
      description: `A generic card deck simulator, with a default poker or bridge playing cards set. Written in Godot Engine, GDScript, for Android. This was deployed to the Google Play Store with Google Ads built in. It is no longer available because I let the target Android version lapse, which is against the Google platform policies. I am taking out the Android features to be more platform-agnostic.`,
      image: DeckSimImg,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
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
            <TextLink to="/" className="text-3xl font-bold" invisibility={0}>
              {demo.title}
            </TextLink>
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
