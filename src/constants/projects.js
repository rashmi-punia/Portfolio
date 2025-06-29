import OGT from "../assets/OGT.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/bookworm.png";

export const items = [
  {
    id: 1,
    title: "BDBVPL Solar Website",
    name: "Corporate Solar Website for BDBVPL",
    img: Project1, 
    githubLink: "https://github.com/rashmi-punia/BDBVPL-Solar-Website", // hypothetical
    liveLink: "https://github.com/rashmi-punia/BDBVPL-Solar-Website", // hypothetical
    desc: "Designed and developed a corporate website for a solar energy company to highlight services, products, and sustainability goals.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "Frontend Developer",
    features: [
      "Mobile-responsive corporate layout",
      "Contact form",
      "SEO-friendly structure",
    ],
    outcome:
      "Helped a real-world client enhance their digital presence and credibility in the renewable energy domain.",
  },
  {
    id: 2,
    title: "Real Estate Web Platform",
    name: "DreamHome – Real Estate Property Listing Website",
    img: Project2, // replace with your image asset
    githubLink: "https://github.com/rashmi-punia/Real-Estate-Platform", // hypothetical
    desc: "A responsive and modern real estate platform where users can explore, filter, and view property listings.",
    techStack: ["React", "Tailwind CSS", "Firebase", "React Router"],
    role: "Full-Stack Developer",
    features: [
      "Property filtering",
      "Authentication with Firebase",
      "Dynamic property pages",
    ],
    outcome:
      "Gained experience building full CRUD functionality and managing state in a larger app.",
  },
  {
    id: 3,
    title: "React Native App - product Recommendor",
    name: "Cross-Platform App with Expo & Clerk Auth",
    img: Project3, // replace with relevant app screenshot
    githubLink: "https://github.com/rashmi-punia/React-Native-AuthApp", // hypothetical
    desc: "Developed a secure login/signup system using Firebase Auth and React Native with real-time validation and storage.",
    techStack: ["React Native", "Expo", "Firebase", "AsyncStorage"],
    role: "Mobile App Developer",
    features: [
      "Email/password auth",
      "Profile image picker",
      "Realtime DB integration",
    ],
    outcome:
      "Built mobile-first thinking and Firebase backend integration skills.",
  },
 
];
