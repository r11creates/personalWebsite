export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  badge: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Director of Technology",
    organization: "University of Toronto Scientific Research Initiative (UTSRI)",
    period: "September 2024 - April 2026",
    badge: "Leadership",
    highlights: [
      "Built responsive multi-page web platform",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server and client components",
      "Technology leadership",
    ],
  },
  {
    role: "Software Engineering Intern",
    organization: "Coubon",
    period: "September 2024 - November 2024",
    badge: "Industry Experience",
    highlights: [
      "Flutter",
      "Riverpod",
      "Firebase",
      "Cross-platform development",
      "Mobile engineering",
    ],
  },
];
