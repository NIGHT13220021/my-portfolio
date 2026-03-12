const projects = [
  {
    id: 1,
    slug: "gym-platform",
    title: "Gym Platform",
    tagline: "Modern React-based gym subscription system.",

    year: 2024,
    status: "Completed",
    category: "Full Stack Web App",

    complexity: 82,
    uiScore: 88,

    problem:
      "Gym members were managed manually, causing booking conflicts and subscription confusion.",

    solution:
      "Built a React frontend with role-based access and integrated backend architecture using Java and MySQL.",

    features: [
      "Role-based authentication",
      "Admin dashboard",
      "Subscription management",
      "Booking scheduler",
      "REST API integration",
    ],

    tech: ["React", "Java", "MySQL", "REST API"],

    github: null,
    demo: null,
  },

  {
    id: 2,
    slug: "student-db",
    title: "Student DB System",
    tagline: "Optimized Java + MySQL backend architecture.",

    year: 2023,
    status: "Completed",
    category: "Backend System",

    complexity: 74,
    uiScore: 60,

    problem:
      "Student data was stored inefficiently with slow query performance and no proper indexing.",

    solution:
      "Implemented indexed queries, structured schema design, and secure role-based access control.",

    features: [
      "CRUD operations",
      "Optimized SQL indexing",
      "Secure login system",
      "Role management",
    ],

    tech: ["Java", "MySQL", "JDBC"],

    github: null,
    demo: null,
  },

  {
    id: 3,
    slug: "portfolio-architecture",
    title: "Portfolio Architecture",
    tagline: "Minimal motion-based portfolio structure.",

    year: 2024,
    status: "Ongoing",
    category: "Frontend UI",

    complexity: 68,
    uiScore: 92,

    problem:
      "Traditional portfolios felt heavy and unstructured.",

    solution:
      "Built a clean motion-based architecture with React and Tailwind.",

    features: [
      "Framer Motion animations",
      "Reusable components",
      "Performance-first structure",
    ],

    tech: ["React", "Tailwind", "Framer Motion"],

    github: null,
    demo: null,
  },

  {
    id: 4,
    slug: "cyber-lab",
    title: "Cyber Lab",
    tagline: "Security testing environment.",

    year: 2024,
    status: "Ongoing",
    category: "Security Practice",

    complexity: 90,
    uiScore: 55,

    problem:
      "Needed safe environment to test vulnerabilities.",

    solution:
      "Built controlled backend lab for security experiments.",

    features: [
      "Authentication testing",
      "API vulnerability testing",
      "Session security checks",
    ],

    tech: ["Node.js", "Express"],

    github: null,
    demo: null,
  },
];

export default projects;