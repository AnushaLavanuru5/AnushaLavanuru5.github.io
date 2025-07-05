interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[][] = [
  // Programming Languages
  [
    { name: "Python", description: "Used extensively for backend development, data analysis, and automation.", icon: "python" },
    { name: "Go", description: "Used for scalable backend systems and API services.", icon: "golang" },
    { name: "Java", description: "Experience in backend systems and enterprise integration.", icon: "java" },
    { name: "C++", description: "Used for systems programming and algorithm-intensive tasks.", icon: "cpp" },
    // { name: "C#", description: "Used in Unity for AR/VR development.", icon: "csharp" },
    { name: "React", description: "Primary frontend library for building UIs.", icon: "react" },
    { name: "Next.js", description: "Used for building server-rendered React applications.", icon: "nextjs-fill" },
    { name: "TypeScript", description: "Used in full-stack web development for type-safe JavaScript.", icon: "typescript" },
    { name: "JavaScript", description: "Used extensively in frontend and backend development.", icon: "javascript" },
    { name: "TailwindCSS", description: "Utility-first CSS framework used in modern web UIs.", icon: "tailwind" }
  ],

  // Frameworks
  [
    { name: "Flask", description: "Python microframework used for building REST APIs.", icon: "flask" },
    // { name: "Express.js", description: "Backend framework for Node.js.", icon: "express" },
    { name: "Gin", description: "High-performance Go web framework used in production.", icon: "gin" },
    { name: "Spring Boot", description: "Java framework used for backend microservices.", icon: "springboot" },
    { name: "Kafka", description: "Used for event streaming and asynchronous messaging.", icon: "kafka" },
    { name: "GraphQL", description: "Query language for APIs, used in modern web apps.", icon: "graphql" },
    { name: "Unity", description: "Used to build AR/VR apps for Oculus and Android.", icon: "unity" }
  ],

  // Databases
  [
    { name: "MySQL", description: "Relational database used in web applications.", icon: "mysql" },
    { name: "PostgreSQL", description: "Powerful open-source SQL database.", icon: "postgresql" },
    { name: "MongoDB", description: "NoSQL database for modern applications.", icon: "mongodb" },
    { name: "DynamoDB", description: "AWS-managed NoSQL database used in scalable apps.", icon: "dynamodb" },
    { name: "Redis", description: "In-memory store used for caching and session management.", icon: "redis" },
    { name: "Milvus", description: "Vector database for AI-powered search and similarity.", icon: "milvus" },
    { name: "InfluxDB", description: "Time-series database used in analytics pipelines.", icon: "Influxdb" }
  ],

  // DevOps & Cloud
  [
    { name: "AWS", description: "Used extensively for cloud infrastructure and deployments.", icon: "aws" },
    { name: "Docker", description: "Used for containerization and environment management.", icon: "docker" },
    { name: "Kubernetes", description: "Used for container orchestration and microservices.", icon: "kubernetes" },
    { name: "Jenkins", description: "Used to build CI/CD pipelines for backend services.", icon: "jenkins" },
    { name: "Git", description: "Version control system used in all projects.", icon: "git" }
  ],

  // Libraries & Data Science
  [
    { name: "OpenCV", description: "Used for computer vision and image processing tasks.", icon: "opencv" },
    { name: "Pandas", description: "Python library for data manipulation.", icon: "pandas" },
    { name: "NumPy", description: "Fundamental package for numerical computations.", icon: "numpy" },
    { name: "Scikit-learn", description: "Used for machine learning models and evaluation.", icon: "scikit-learn" },
    { name: "Matplotlib", description: "Python library for data visualization.", icon: "matplotlib" },
    { name: "TensorFlow", description: "Used for deep learning models.", icon: "tensorflow" },
    { name: "PyTorch", description: "Deep learning framework for research and production.", icon: "pytorch" },
    { name: "NLTK", description: "Library for natural language processing in Python.", icon: "python" }
  ],

  // UI/UX & Design
  // [
  //   { name: "Figma", description: "Used for designing and prototyping interactive UIs.", icon: "figma" }
  // ],

  // XR & Game Development
  // [
  //   { name: "Photon Fusion", description: "Used for multi-user networking in XR apps.", icon: "photonfusion" },
  // ],

  // Misc
  // [
  //   { name: "AstroJs", description: "My favorite static site generator for building modern websites.", icon: "astro_dark" }
  // ]
];

export default hardSkills;