import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SMK Muhammadiyah Majenang",
    location: "Cilacap, Jawa Tengah",
    description:
      "I graduated after 3 years of study. majoring in multimedia and learning about video and photo editing.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Utschool IT Programming",
    location: "Jakarta, Indonesia",
    description:
      "Learn about several programming languages and frameworks for websites and mobile such as HTML, CSS, JavaScript, ReactJS, NodeJS, Python React Native .NET, and Laravel.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "STMIK Komputama Majenang",
    location: "Cilacap, Jawa Tengah",
    description:
      "informatics engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Frist Portofolio",
    description:
      "I created a portfolio for the first time to apply for jobs and bootcamps.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "HelpDesk",
    description:
      "Design a simple and intuitive interface that allows employees to submit tickets quickly and easily.",
    tags: ["Figma", "IconScout"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "CorelDraw",
  "Express",
  "Figma",
  "Python",
  "Framer Motion",
  "ProblemSolve",
] as const;
