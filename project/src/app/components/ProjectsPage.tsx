import { useTheme } from "../context/ThemeContext";
import MacropusImg from "../assets/Macropus.svg";
import GodotImg from "../assets/Godot.svg";
import DeckSimImg from "../assets/DeckSim.png";
import ScriptorImg from "../assets/Scriptor.png";
import ArduinoImg from "../assets/Arduino.svg";
import { TextLink } from "./TextLink";
import { Link } from "react-router";

export function ProjectsPage() {
  const { theme } = useTheme();
  const githubProjects = [
    {
      id: 1,
      title: "Macropus",
      href: "https://github.com/newpsoft/macropus",
      description:
        "A hotkey and macro application with a visual configuration and keyboard+mouse macro recorder. This is currently not available, as it is undergoing major simplification and feature implementation. This project has been used to learn programming languages and programming concepts. It was originally written in C# as a proof of concept, and re-written in C++/Qt/QML. The hotkey and macro code was extracted to the Libmacro reusable library. Together, they are the main components of the Macropus system.",
      image: MacropusImg,
    },
    {
      id: 2,
      title: "Libmacro",
      href: "https://github.com/newpsoft/libmacro",
      description:
        "Libmacro is a multi-platform, extendable macro and hotkey C library. This is currently not available, as it is undergoing major simplification and feature reduction. This is the core of Macropus.",
      image: MacropusImg,
    },
    {
      id: 3,
      title: "GodotSvg",
      href: "https://github.com/newpsoft/godotsvg",
      description: `GodotSvg is a Godot Android plugin to read SVG files, which can be used as images in a Godot application. This used to be necessary for Android applications, but Godot now handles SVG on Android without this plugin.`,
      image: GodotImg,
    },
    {
      id: 4,
      title: "Gamepad Master",
      href: "https://github.com/Funmungus/GamepadMaster",
      description: `Arduino project to revive or customize dead gamepads. Uses the Joystick library to register USB as a Joystick (requires USB firmware already installed). Read some values from its own IO and read additional values from a Digital Slave serial connection. The serial connection to an additional chip solved my problem of limited pins.`,
      image: ArduinoImg,
    },
    {
      id: 5,
      title: "Digital Slave",
      href: "https://github.com/Funmungus/DigitalSlave",
      description: `An Arduino project that simply reads pins and writes values to a serial connection. Used by Gamepad Master to read additional button states.`,
      image: ArduinoImg,
    },
  ];

  const privateProjects = [
    {
      id: 6,
      title: "Configuration Service",
      description:
        "A generic configuration service for any type of application or client. Written with Ruby on Rails and a bootstrap UI. Communication over WebSockets. Proof of concept client code has been written in Python, QML, Java, Kotlin, and Javascript. Further details will not be provided until the service is publicly available.",
      image:
        "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Configuration+Service",
    },
    {
      id: 7,
      title: "Onestop",
      description:
        "A NOAA Data Search Platform. As part of the archive team, I helped secure dependencies, apply required CI/CD, and fix errors to deploy this in AWS EKS. Once deployed, our team was responsible for new features and maintenance.",
      image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Onestop",
    },
    {
      id: 8,
      title: "DeckSim",
      description: `A generic card deck simulator, with a default poker or bridge playing cards set. Written in Godot Engine, GDScript, for Android. This was deployed to the Google Play Store with Google Ads built in. It is no longer available because I let the target Android version lapse, which is against the Google platform policies. I am taking out the Android features to be more platform-agnostic.`,
      image: DeckSimImg,
    },
  ];

  const defunctProjects = [
    {
      id: 9,
      title: "Scriptor",
      description: `An Ubuntu Touch native-GUI (Qt/QML) app that stores and runs scripts. Scripts could be typed into the runbox directly, or select a script file reference. The list is kept to easily perform repetitive tasks. The original Ubuntu Touch and app platform is no longer available. UBports has an updated app store platform, but I do not have a dev device to revive this project.`,
      image: ScriptorImg,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
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
              <Link
                to={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mx-auto h-48 justify-center"
                />
              </Link>
              <div className="p-6 space-y-2">
                <h3
                  className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  <TextLink
                    to={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    invisibility={0}
                  >
                    {project.title}
                  </TextLink>
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
                className="mx-auto h-48 justify-center"
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
            Defunct Projects
          </h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Projects that are no longer viable. Either the build environment is
            not available or the target platform is no longer available.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defunctProjects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${theme === "dark" ? "border-gray-800 bg-gray-800/50 hover:shadow-blue-500/10 hover:border-gray-700" : "border-gray-200 bg-white hover:shadow-gray-300 hover:border-gray-300"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-48 justify-center"
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
