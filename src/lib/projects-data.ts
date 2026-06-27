import cubesat from "@/assets/proj-cubesat.jpg";
import humanoid from "@/assets/proj-humanoid.jpg";
import smarthome from "@/assets/proj-smarthome.jpg";
import flying from "@/assets/proj-flying.jpg";

export const PROJECTS = [
  {
    code: "PRJ-01",
    slug: "cubesat",
    title: "CubeSat Satellite",
    img: cubesat,
    level: "Advanced",
    age: "14–18 years",
    duration: "6 months",
    short:
      "Design and build miniature satellites using ESP32 microcontrollers.",
    desc:
      "Learn space technology, orbital mechanics, and IoT communication. Program sensors for data collection, integrate solar panels for power management, and understand satellite communication protocols. Launch simulations and ground-station operations included.",
    skills: ["ESP32 firmware", "Sensor integration", "Solar power systems", "Comms protocols", "Ground-station ops"],
  },
  {
    code: "PRJ-02",
    slug: "humanoid",
    title: "Humanoid Robots",
    img: humanoid,
    level: "Advanced",
    age: "12–18 years",
    duration: "6 months",
    short: "Create human-like robots with articulated movements and AI capabilities.",
    desc:
      "Learn servo motor control, inverse kinematics, and gesture recognition. Program robots to walk, dance, pick objects, and respond to voice commands. Showcase your humanoid in our annual robotics exhibition.",
    skills: ["Servo control", "Inverse kinematics", "Voice & gesture AI", "Locomotion", "Exhibition demo"],
  },
  {
    code: "PRJ-03",
    slug: "smart-homes",
    title: "Automated Smart Homes",
    img: smarthome,
    level: "Intermediate",
    age: "10–16 years",
    duration: "4 months",
    short: "Build IoT-powered miniature smart homes with complete automation.",
    desc:
      "Design systems with motion sensors, voice control, automated lighting, and security features. Learn WiFi/Bluetooth protocols and mobile app development. Create your own Google Assistant / Alexa integrated home model.",
    skills: ["IoT sensors", "WiFi & Bluetooth", "Voice assistants", "Mobile app basics", "Home automation"],
  },
  {
    code: "PRJ-04",
    slug: "flying-airplane",
    title: "Flying Airplane",
    img: flying,
    level: "Advanced",
    age: "12–18 years",
    duration: "5 months",
    short: "Design and pilot remote-controlled aircraft and drones.",
    desc:
      "Master aerodynamics, flight mechanics, and FPV systems. Build from balsa-wood gliders to advanced quadcopters with GPS. Learn flight controller programming and compete in aerial challenges and drone racing competitions.",
    skills: ["Aerodynamics", "FPV systems", "Flight controllers", "GPS navigation", "Drone racing"],
  },
] as const;

export const COURSES = [
  {
    code: "CRS-01",
    title: "Robotics Foundation",
    tag: "Beginner",
    duration: "3 months",
    age: "8–12 years",
    desc: "Perfect start for beginners. Learn basics of robotics, electronics, and programming.",
    highlights: ["Circuit fundamentals", "Block-based coding", "First robot build", "Sensor basics"],
  },
  {
    code: "CRS-02",
    title: "Advanced Robotics",
    tag: "Advanced",
    duration: "6 months",
    age: "12–18 years",
    desc: "Master complex robot designs, AI integration, and competition-level skills.",
    highlights: ["Embedded C/Python", "AI integration", "Mechanical design", "Competition prep"],
  },
  {
    code: "CRS-03",
    title: "Competition Prep",
    tag: "Intensive",
    duration: "4 months",
    age: "10–18 years",
    desc: "Intensive training for national robotics competitions like Avishkaar.",
    highlights: ["Avishkaar curriculum", "Mock challenges", "Mentor reviews", "Team strategy"],
  },
] as const;
