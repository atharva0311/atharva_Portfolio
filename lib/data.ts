export const personal = {
  name: "Atharva Shashikant Shinde",
  firstName: "Atharva",
  lastName: "Shinde",
  role: "Computer Engineer · AI/ML Developer · Python Developer",
  tagline: "Building advanced AI & ML systems, scalable applications, and impactful products.",
  about:
    "Computer Engineering student with 96.47% academic performance and hands-on experience across artificial intelligence, machine learning, computer vision, Python, Django, and full-stack development. Experienced through internships, AI/ML training, research publication, patent filing, innovation projects, leadership roles, and national-level competitions.",
  email: "atharvashinde0311@gmail.com",
  phone: "+91 9067357119",
  location: "Maharashtra, India",
  linkedin: "https://linkedin.com/in/atharvashinde0311/",
  github: "https://github.com/atharva0311",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "96.47%", label: "Academic Score" },
  { value: "3+", label: "Internships" },
  { value: "2,000+", label: "Images Annotated" },
  { value: "25 FPS", label: "Real-Time AI" },
];

export const services = [
  "AI/ML Systems",
  "Computer Vision",
  "Python Automation",
  "Django Web Apps",
  "Research & Prototyping",
  "Data-Driven Products",
];

export const techStack = [
  "Python",
  "YOLOv8",
  "OpenCV",
  "Django",
  "Machine Learning",
  "Deep Learning",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "SQLite",
  "React",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "CVAT",
  "Google Colab",
  "OCR",
];

export const skills = {
  programming: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"],
  aiml: ["Machine Learning", "Deep Learning", "Computer Vision", "YOLOv8", "OpenCV", "OCR", "Scikit-learn"],
  web: ["Django", "React", "Tailwind CSS", "Bootstrap", "SQLite", "REST-style backend logic"],
  tools: ["Git", "GitHub", "VS Code", "Google Colab", "CVAT", "LabelImg", "Django ORM"],
  professional: ["Problem Solving", "Leadership", "Team Coordination", "Research Writing", "Technical Presentation"],
};

export const experience = [
  {
    company: "Walstar Technologies Pvt. Ltd.",
    role: "AI/ML Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Kolhapur, India",
    type: "On-site",
    points: [
      "Streamlined AI/ML data processing workflows, reducing model development time by 15%.",
      "Developed Python-based machine learning solutions, improving data analysis efficiency by 20%.",
      "Enhanced predictive model accuracy by 10% through data-driven experimentation and optimization.",
    ],
  },
  {
    company: "Pantech",
    role: "AI & Data Science Trainee",
    period: "Jul 2025 – Oct 2025",
    location: "Virtual",
    type: "Virtual",
    points: [
      "Implemented machine learning and data analytics concepts through practical case studies.",
      "Worked on data preprocessing, visualization, predictive modeling, and analytical problem-solving.",
      "Strengthened understanding of AI, Data Science, and applied model development workflows.",
    ],
  },
  {
    company: "Ibase Technology",
    role: "Python Intern",
    period: "30 Jun 2025 – 06 Jul 2025",
    location: "Virtual",
    type: "Virtual",
    points: [
      "Implemented Python programs using core programming concepts and object-oriented programming principles.",
      "Optimized code efficiency by 25%, reducing execution time for key functions.",
      "Applied data handling methodologies in practical assignments and structured programming tasks.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Based Smart Traffic Management System",
    location: "Personal Project",
    duration: "Jan 2025 – Apr 2025",
    description:
      "AI-powered traffic management platform for real-time vehicle detection, adaptive signal control, violation monitoring, accident detection, automatic number plate recognition, and e-challan generation.",
    tech: ["Python", "YOLOv8", "OpenCV", "Django", "OCR", "SQLite"],
    highlights: ["Adaptive Signal Control", "ANPR + E-Challan", "Accident Alerts", "ITS Workflow"],
    images: [
      "/projects/traffic-1.png",
      "/projects/traffic-2.png",
      "/projects/traffic-3.png",
    ],
    points: [
      "Developed an AI-powered traffic management system for real-time vehicle detection, traffic density analysis, violation monitoring, and accident detection using YOLOv8.",
      "Integrated adaptive signal control using weighted traffic load analysis and built violation modules for red-light jumping, helmetless riding, triple riding, ANPR, and e-challan generation.",
      "Engineered an accident detection and alert system to identify collision patterns and notify authorities for faster emergency response.",
    ],
    featured: true,
  },
  {
    title: "AI-Based Object Detection System",
    location: "Personal Project",
    duration: "Sep 2024 – Dec 2024",
    description:
      "Real-time YOLOv8 object detection system trained on a custom annotated dataset with strong precision, recall, mAP@50, and GPU inference speed.",
    tech: ["Python", "YOLOv8", "OpenCV", "NumPy", "CVAT", "Google Colab"],
    highlights: ["2,000+ Images", "88% Precision", "85% Recall", "25 FPS"],
    images: [
      "/projects/object-detection-1.png",
      "/projects/object-detection-2.png",
      "/projects/object-detection-3.png",
    ],
    points: [
      "Developed a YOLOv8-based object detection system for real-time identification and localization of multiple objects in images and video streams.",
      "Prepared and annotated 2,000+ images using CVAT and LabelImg, covering Person, Bicycle, Dog, Cat, Laptop, Bottle, and Chair classes.",
      "Achieved ~88% Precision, 85% Recall, 82% mAP@50, and nearly 25 FPS GPU inference using OpenCV, NumPy, and Ultralytics YOLOv8.",
    ],
    featured: true,
  },
  {
    title: "KMT Bus Management System",
    location: "Academic Project",
    duration: "Jan 2024 – May 2024",
    description:
      "Full-stack web-based bus management system with role-based access, route scheduling, bookings, GPS tracking architecture, and operational analytics.",
    tech: ["Django", "Python", "Bootstrap", "SQLite", "HTML", "CSS", "JavaScript"],
    highlights: ["Role-Based Access", "GPS Architecture", "Booking System", "Admin Analytics"],
    images: [
      "/projects/bus-management-1.png",
      "/projects/bus-management-2.png",
      "/projects/bus-management-3.png",
    ],
    points: [
      "Developed a full-stack Bus Management System with role-based access for Admin, Driver, and Passenger users using Django authentication and authorization.",
      "Engineered bus, route, stop, trip scheduling, booking, seat availability, CRUD, dashboard, allocation, monitoring, and analytics modules.",
      "Integrated live GPS tracking architecture and used Django ORM with SQLite to manage users, buses, routes, schedules, bookings, and driver assignments.",
    ],
    featured: false,
  },
];

export const education = {
  degree: "Diploma in Computer Engineering",
  institution: "Dr. D. Y. Patil Polytechnic",
  graduation: "Expected 2026",
  score: "96.47%",
  achievements: [
    "Best Outgoing Student",
    "First Rank in First Semester",
    "100/100 in Data Structures Using C",
    "Outstanding Academic Performance",
  ],
};

export const certifications = [
  { name: "Google Cloud Gen AI Academy 2.0", issuer: "Google Cloud × Hack2Skill", year: "2025" },
  { name: "6 Google Cloud Skill Tracks", issuer: "Google Cloud", year: "2025", note: "GCP, AI/ML, Data Engineering, DevOps, Security, Serverless" },
  { name: "Python ATM Simulation Workshop", issuer: "LetsUpgrade", year: "2025" },
  { name: "Build Your First AI Model", issuer: "LetsUpgrade", year: "2025" },
  { name: "C++ Programming Certification", issuer: "Disha Computer Institute", year: "2024" },
  { name: "MSCIT Course Completion", issuer: "MSBTE & MKCL", year: "2023" },
];

export const achievements = [
  "Filed Design Patent: FLUX SYNCHRONIZED TRANSFORMER DIAGNOSTIC DEVICE.",
  "Published IJSRED research paper on AI-Powered Smart Traffic System with Accident & Violation Detection and E-Challan Generation.",
  "Best Outgoing Student, Dr. D. Y. Patil Polytechnic.",
  "Winner, National-Level TECHNOVA 2K24 Quiz Competition (2024).",
  "Runner-Up, National-Level TECHNOCRAT Project Competition (2026).",
  "Runner-Up, State-Level Vishwavision 2K26 Paper Presentation Competition (2026).",
  "2nd Runner-Up, National-Level CODE FUSION Programming Competition (2025).",
  "Secured top positions in multiple College-Level Competitions, including Coding, Mini Project, and Idea Presentation Events, and achieved Runner-Up in the Aptitude Competition.",
];

export const sports = [
  "Winner, Badminton Zonal Championship for three consecutive years (2023–2026), demonstrating discipline, consistency, strategic gameplay, and competitive sportsmanship.",
  "Winner, State-Level Interzonal Badminton Championship (2023–2024), showcasing leadership, focus, teamwork, and high performance under pressure.",
];

export const publication = {
  title: "AI-Powered Smart Automated Traffic System with Accident Detection & Violation Detection with E-Challan",
  journal: "International Journal of Scientific Research and Engineering Development (IJSRED)",
  year: "2025",
  link: "https://ijsred.com/volume9/issue2/paper-details/IJSRED-V9I2P202.html",
};

export const patent = {
  title: "FLUX SYNCHRONIZED TRANSFORMER DIAGNOSTIC DEVICE",
  type: "Design Patent",
  status: "Filed",
  description:
    "Innovative transformer monitoring and diagnostic technology for enhanced reliability, fault detection, and diagnostic monitoring.",
};

export const leadership = [
  "Student Head, College Grievance Committee (2024–2026), supporting student issue resolution.",
  "Coordinator, NSS Green Brigade Club, supporting environmental and sustainability initiatives.",
  "Coordinator, TECHNOVA Events, assisting with event planning and coordination.",
  "Active Member, Coding Club, participating in programming and technical activities.",
];
