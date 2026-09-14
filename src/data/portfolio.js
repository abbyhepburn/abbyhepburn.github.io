export const site = {
  name: 'Abigail Hepburn', firstName: 'abigail', lastName: 'hepburn',
  email: 'abigailzhepburn@gmail.com',
  github: 'https://github.com/abbyhepburn',
  linkedin: 'https://www.linkedin.com/in/abigail-hepburn',
  location: 'Gainesville, FL',
  tagline: 'Computer Engineering student building data pipelines, computer vision tools, and software for real-world problems.',
  philosophy: 'I enjoy turning complex problems into useful software.',
  philosophyContext: 'My work spans data engineering, research, and computer vision.',
  roles: ['computer engineering student', 'data engineer', 'software developer', 'innovator', 'creator', 'curious problem solver'],
  skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'MongoDB', 'OpenCV', 'Git', 'Supabase'],
};
export const navLinks = [
  { id: 'about', label: 'education', num: '01' },
  { id: 'experience', label: 'experience', num: '02' },
  { id: 'projects', label: 'projects', num: '03' },
  { id: 'leadership', label: 'leadership', num: '04' },
  { id: 'skills', label: 'skills', num: '05' },
  { id: 'terminal', label: 'terminal', num: '06' },
];
export const education = {
  school: 'University of Florida, College of Engineering',
  degree: 'Bachelor of Science in Computer Engineering',
  minor: 'Minor in Sales Engineering',
  graduation: 'Expected May 2029',
  gpa: '3.87',
  relevantCoursework: 'Programming Fundamentals 1 & 2, Discrete Structures',
  currentCoursework: 'Data Structures & Algorithms, Signals & Systems',
};
export const skills = {
  languages: 'Python, JavaScript, TypeScript, C++, HTML, Java, SQL (MySQL, PostgreSQL), MongoDB',
  tools: 'PyCharm, VS Code, GitHub, Git, CLion, Swift',
  certifications: 'Java, Onshape CAD Fundamentals, Device Configuration, HTML, CSS, JavaScript',
};
export const projects = [
  {
    id: '01', title: 'Face Detection System', date: 'April 2026',
    description: 'Created a real-time computer vision app using OpenCV and MediaPipe for facial landmark mapping and NumPy for high-performance image array processing. Integrated live video capture, 3D facial landmarks, and a PySide6 interface.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PySide6'],
    github: 'https://github.com/abbyhepburn/Face-Detection',
  },
  {
    id: '02', title: 'FlexRight', date: 'January 2026',
    description: 'Hackathon team project: an AI-driven fitness tool for real-time form correction. Engineered backend logic to calculate joint angles and track skeletal positioning from YOLO coordinates. Managed the MongoDB database and integrated OpenCV overlays with dynamic visual cues and skeletal maps.',
    tags: ['Python', 'MongoDB', 'Ultralytics', 'OpenCV', 'NumPy', 'Tkinter', 'Gradio', 'CSS'],
    github: 'https://github.com/abbyhepburn/FlexRight',
  },
  {
    id: '03', title: 'Support Bot', date: 'October 2025',
    description: 'Designed and built a document-aware AI chatbot using a RAG pipeline to answer questions about uploaded documents. Supports PDF, DOCX, and TXT files by extracting text and checking for similarities.',
    tags: ['OpenAI', 'Python', 'Gradio'],
    github: 'https://github.com/abbyhepburn/Support-Bot',
  },
];
export const experience = [
  {
    date: 'August 2026–January 2027', company: 'BeachLens', role: 'Data Engineer Intern', type: 'Internship',
    bullets: [
      'Collected and structured data from various beaches and their local businesses to support features for the BeachLens app, which has more than 20,000 downloads.',
      'Cleaned and processed raw datasets to ensure data integrity before storing records directly in Supabase.',
      'Built an automated data pipeline using Python, Jina, and the Navigator API to extract website data, format it, and store it in Supabase.',
    ],
  },
  {
    date: 'May 2026–August 2026', company: 'NextEra Energy', role: 'Power Delivery Engineer Intern', type: 'Internship',
    bullets: [
      'Cleaned, maintained, and validated the distribution operations database for a grid serving over 6 million customer accounts to improve data integrity, system accuracy, and analysis reliability.',
      'Designed data-driven solutions for electrical grid infrastructure by interpreting load information, mapping circuit pathways, and reviewing engineering documentation, supporting more than 30 distribution projects.',
      'Audited technical asset specifications and evaluated power delivery components to ensure designs were fully constructed in the field.',
    ],
  },
  {
    date: 'October 2025–May 2026', company: 'UF Data Studio', role: 'Research Assistant', type: 'Research',
    bullets: [
      'Conducted research on LLM-based synthetic prediction generation using Python, producing structured datasets stored in CSV format.',
      'Designed and evaluated few-shot, zero-shot, and chain-of-thought prompting strategies for finance, health, policy, weather, and sports prediction data.',
      'Executed Python data pipelines with the NaviGator Toolkit to generate 10–15 batches of data per week.',
    ],
  },
];
export const leadership = [
  {
    id: '01', org: 'National Society of Black Engineers', role: 'Technical Development Chair — Software Lead',
    bullets: [
      'Conduct software-focused technical workshops for a club of more than 200 members, covering programming concepts, tools, and skills.',
      'Help lead the NSBE design team by planning and guiding software development for a self-balancing robot.',
    ],
  },
  {
    id: '02', org: 'Real World Engineering', role: 'Software Design Team Lead',
    bullets: [
      'Worked with a team of Mechanical & Electrical Engineers to create a robotic hand with 4-degrees of freedom.',
      'Key tasks included developing control logic by creating Python functions for forward and inverse kinematics.',
    ],
  },
];
