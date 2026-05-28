export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "Go",
      "Java",
      "JavaScript",
      "TypeScript",
      "Haskell",
      "MIPS Assembly",
      "SQL",
    ],
  },
  {
    title: "Systems",
    skills: [
      "Operating Systems",
      "Computer Architecture",
      "Parallel Programming",
      "Systems Programming",
      "Memory Management",
      "IPC",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Statistical Modeling",
    ],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vite"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "Maven", "VS Code", "Cursor"],
  },
  {
    title: "Coursework",
    skills: [
      "Database Systems",
      "Machine Learning",
      "Operating Systems",
      "Computer Architecture",
      "Principles of Programming Languages",
      "Systems Programming",
      "Data Structures and Algorithms",
      "Software Design",
    ],
  },
];
