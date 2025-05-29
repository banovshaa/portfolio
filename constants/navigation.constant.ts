import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/assets/images/shared.vector";

export const headerNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experience",
    path: "/#experience",
  },
  {
    name: "Skills",
    path: "/#skills",
  },
  {
    name: "Project",
    path: "/#project",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

export const socials = [
  {
    name: "instagram",
    icon: InstagramIcon,
    path: "https://www.instagram.com/ll_abdieva_ll/",
  },
  {
    name: "linkedin",
    icon: LinkedInIcon,
    path: "https://www.linkedin.com/in/banovsha-abdiyeva/",
  },
  {
    name: "github",
    icon: GitHubIcon,
    path: "https://github.com/banovshaa",
  },
];

export const experiences = [
  {
    id: 1,
    name: "Front-End Intern",
    location: "Code Academy / Baku, Azerbaijan",
    description:
      "Assisted in developing responsive web applications using HTML, CSS, and JavaScript. Worked with modern front-end frameworks/libraries such as React.js. Debugged and optimized code for performance and cross-browser compatibility.",
    start_date: "August 2022",
    end_date: "July 2023",
  },
  {
    id: 2,
    name: "Student mentor",
    description:
      "Providing support to students, assisting them in overcoming challenges and maximizing their learning potential about programming.",
    location: "Code Academy / Baku, Azerbaijan",
    start_date: "July 2023",
    end_date: "April 2024",
  },
  {
    id: 3,
    name: "Front-End Developer",
    description:
      "Creating stunning websites using modern HTML5, CSS3 and JavaScript frameworks. Working closely with back-end developers to integrate APIs and optimize data flows between client and server sides. Consistently engaging with UI/UX designers.",
    location: "BIRainy LLC / Baku, Azerbaijan",
    start_date: "July 2023",
  },
];
