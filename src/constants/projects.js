import OGT from "../assets/OGT.png";
import FoodApp from "../assets/Food-sc.png";
import Chrome from "../assets/Chrome.png";

import Blog from "../assets/Blog.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";

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
    title: "React Native Authentication App",
    name: "Cross-Platform Auth App with Expo & Firebase",
    img: Project1, // replace with relevant app screenshot
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
  // {
  //   id: 1,
  //   title: "Project-01",
  //   name: "OGT website- A Journey from Beginner to Building",
  //   img: OGT,
  //   githubLink: "https://github.com/rashmi-punia/Phone-Responsive",
  //   desc: "This project marks a significant milestone in my development journey. As a passionate beginner in web development, I embarked on creating this website to solidify my understanding of front-end technologies and gain practical experience.",
  // },
  // {
  //   id: 2,
  //   title: "Project-02",
  //   img: FoodApp,
  //   githubLink: "https://github.com/rashmi-punia/Food-app",
  //   name: " Unleash Your Inner Chef: Discover Delicious Recipes with Food-recpie website",
  //   desc: "Finding the perfect recipe is a breeze with our user-friendly search bar. Simply type in a keyword, ingredient, or cuisine type, and explore a vast collection of dishes, used an Api to fetch data about ingredients for respective recipes ",
  // },
  // {
  //   id: 3,
  //   title: "Project-03",
  //   img: Chrome,
  //   githubLink: "https://github.com/rashmi-punia/Basic-Chrome-clone",
  //   name: "Chrome Landing Page Recreation: Honing My Skills in Transitions",
  //   desc: "This project involved recreating the Chrome landing page, focusing on replicating its smooth and engaging transitions. As a web developer, mastering transitions is crucial for creating a dynamic and user-friendly experience.",
  // },
  // {
  //   id: 4,
  //   title: "Project-04",
  //   img: Blog,
  //   githubLink: "https://github.com/rashmi-punia/Blog-Website",
  //   name: "Building Blog Cards: A Foundation for Beautiful Layouts (Beginner Project)",
  //   desc: "This project represents my first steps into the exciting world of web design. Focusing on creating basic blog cards with CSS, I laid the groundwork for understanding layout structures and styling techniques.",
  // },
];
