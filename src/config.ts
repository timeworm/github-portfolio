export const siteConfig = {
  name: "하병수",
  title: "SCU 빅데이터·정보보호학과",
  description: "Portfolio website of 하병수",
  accentColor: "#1d4ed8",
  social: {
    email: "timeworm74@gmail.com",
    linkedin: "None",
    twitter: "None",
    github: "https://github.com/timeworm",
  },
  aboutMe:
    "네트워크 서비스 분야에서 근무하며, 대학에서 정보보안과 인공지능을 함께 공부하고 있습니다. 배운 내용을 문서로 정리하고 직접 실습하며 성장하는 것을 목표로 합니다.",
  skills: ["System & Network Security", "Python", "AWS", "SQL", "Linux"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "정보보안과 인공지능을 공부하는 네트워크 엔지니어 하병수의 포트폴리오",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "SKbroadband H&S",
      title: "B2B Network Technician",
      dateRange: "Jul 2017 - Present",
      bullets: [
        "Installed and maintained L2 layer network devices",
        "Installed and maintained AGW devices",
        "Installed and maintained DI/DO trunk line devices",
        "Installed and maintained various B2B equipment",
        "Delivered in-house training as an instructor on job knowledge and skills",
      ],
    },
    
  ],
  education: [
    {
      school: "Seoul Cyber University (SCU)",
      degree: "Bachelor of Engineering in Big Data & Information Security",
      dateRange: "2024 - Present",
      achievements: [
        "Currently enrolled in 3rd year, 1st semester",
        "Major: Big Data & Information Security, College of Engineering",
        "Focus areas: Information Security and Artificial Intelligence",
      ],
    },
    
  ],
};
