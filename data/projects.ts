export type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  date: string;
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured?: boolean;
  emphasis?: string;
  visual: "graph" | "neural" | "assembly" | "map" | "course" | "model";
};

export const projects: Project[] = [
  {
    title: "CodeAtlas AI",
    featured: true,
    date: "2026",
    githubUrl: "https://github.com/r11creates/codeAtlas",
    image: "/projects/codeatlas.svg",
    visual: "graph",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "OpenAI API",
    ],
    description:
      "AI-powered repository analysis platform that indexes GitHub repositories and enables semantic code search, architecture understanding, and repository-aware chat through retrieval-augmented generation.",
    highlights: [
      "Full-stack architecture",
      "RAG implementation",
      "Vector database integration",
      "Async indexing pipeline",
      "Repository graph analysis",
      "Developer dashboard",
    ],
  },
  {
    title: "NeuroCPP",
    featured: true,
    date: "2025",
    githubUrl: "https://github.com/r11creates/neuroCPP",
    image: "/projects/neurocpp.svg",
    visual: "neural",
    technologies: ["C++20", "CMake", "GoogleTest"],
    description:
      "Machine learning framework implemented entirely from scratch using modern C++.",
    highlights: [
      "Tensor engine",
      "Reverse-mode autodiff",
      "Neural networks",
      "Optimizers",
      "Classical machine learning algorithms",
      "50+ automated tests",
    ],
  },
  {
    title: "Dr. Mario",
    date: "2024",
    githubUrl: "https://github.com/r11creates/DrMario",
    image: "/projects/drmario.svg",
    visual: "assembly",
    technologies: ["MIPS Assembly"],
    emphasis: "Low-level systems engineering",
    description: "Complete recreation of Dr. Mario built entirely in MIPS Assembly.",
    highlights: [
      "Real-time gameplay",
      "Sprite rendering",
      "Gravity mechanics",
      "Collision detection",
      "MIDI audio engine",
      "Memory-mapped IO",
    ],
  },
  {
    title: "UofTGuessr",
    date: "2024",
    githubUrl: "https://github.com/r11creates/UofTGuessr",
    image: "/projects/uoftguessr.svg",
    visual: "map",
    technologies: ["Java", "Firebase", "Sockets", "JUnit", "Mockito"],
    description:
      "GeoGuessr-inspired multiplayer game centered around University of Toronto locations.",
    highlights: [
      "Clean Architecture",
      "Real-time multiplayer",
      "Authentication",
      "Community-generated content",
      "Distance-based scoring",
    ],
  },
  {
    title: "UofT Course Selector",
    date: "2024",
    githubUrl: "https://github.com/r11creates/UofT-Course-Selector",
    image: "/projects/course-selector.svg",
    visual: "course",
    technologies: ["Python", "Tkinter", "NetworkX", "Plotly", "BeautifulSoup"],
    description:
      "Course recommendation and planning platform for University of Toronto students.",
    highlights: [
      "Graph algorithms",
      "Dependency visualization",
      "Degree planning",
      "Web scraping",
      "Interactive GUI",
    ],
  },
  {
    title: "UNICEF Conflict Escalation Prediction Model",
    date: "2024",
    githubUrl: "https://github.com/r11creates/Predicting-Conflict-Escalation-UNICEF",
    image: "/projects/unicef.svg",
    visual: "model",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
    description:
      "Meta-model predicting which conflict prediction models perform best using country-level indicators.",
    highlights: [
      "Feature selection",
      "Statistical analysis",
      "Model evaluation",
      "Predictor reduction",
    ],
  },
];
