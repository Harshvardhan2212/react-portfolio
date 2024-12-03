import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = "I am a passionate full stack developer with expertise in crafting robust and scalable web applications. With experience in technologies like React.js, Laravel, MySQL, PostgreSQL, and more, I specialize in creating efficient, maintainable, and high-performance solutions. My aim is to deliver exceptional user experiences and drive business success through technology.";

export const ABOUT_TEXT = "I am a dedicated software developer with a strong foundation in both front-end and back-end technologies. My journey in technology has allowed me to design optimized database schemas, refactor code for maintainability, and enhance application performance. I thrive on solving challenges and learning new tools, always aiming to build impactful applications. Outside of coding, I enjoy chess, reading articles, and exploring new tech trends.";

export const EXPERIENCES = [
  {
    "year": "2024",
    "role": "Software Developer",
    "company": "WebCodeGenie Technology Pvt. Ltd.",
    "description": "Designed optimized database schemas, refactored code to improve maintainability, and implemented caching strategies for enhanced performance. Developed global jQuery and AJAX functions for consistency and scalability.",
    "technologies": ["Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"]
  },
  {
    "year": "2023 - 2024",
    "role": "Intern",
    "company": "Desire Infotech",
    "description": "Contributed to dynamic web applications using React.js. Assisted with debugging and troubleshooting to ensure optimal performance and seamless user experiences.",
    "technologies": ["React.js", "JavaScript"]
  }
];

export const PROJECTS = [
  {
      "title": "Multishop",
      "image": project1,
      "description": "An e-commerce platform with features like product listings, category filtering, and wildcard search. Includes admin and client roles for feature management.",
      "technologies": ["React.js", "Laravel", "MySQL"]
    },
    {
      "title": "Leave Management System",
      "image": project3,
      "description": "A system to manage employee attendance, salary, and leaves. Features include admin dashboards, real-time data visualization, and interactive graphs.",
      "technologies": ["Laravel", "MySQL", "AJAX", "jQuery"]
    },
    {
      "title": "MovieApp",
      "image": project2,
      "description": "A movie exploration app leveraging React.js, Axios, and TMDB API for seamless movie data retrieval and display.",
      "technologies": ["React.js", "Axios", "TMDB API"]
    }
];

export const CONTACT = {
  address: "Sola Ahmedabad,Gujarat",
  phoneNo: "+91 63537 94561",
  email: "harshvardhan.z2002@gmail.com",
};
