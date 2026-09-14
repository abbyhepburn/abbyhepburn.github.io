export const site = {
  name: 'Abigail Hepburn', firstName: 'abigail', lastName: 'hepburn',
  email: 'abigailzhepburn@gmail.com',
  github: 'https://github.com/abbyhepburn',
  linkedin: 'https://www.linkedin.com/in/abigail-hepburn',
  location: 'Gainesville, FL',
  avatar: '/logo192.png',
  photos: [{ src: '/logo192.png', caption: 'Abigail Hepburn' }],
  tagline: 'Computer Engineering student building data pipelines, computer vision tools, and software for real-world problems.',
  philosophy: 'I enjoy turning complex problems into useful software.',
  philosophyContext: 'My work spans data engineering, power delivery, research, and computer vision.',
  roles: ['computer engineering student', 'data engineer', 'software developer'],
  skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'MongoDB', 'OpenCV', 'Git', 'Supabase'],
};
export const navLinks = [
  { id: 'about', label: 'about', num: '01' }, { id: 'gallery', label: 'gallery', num: '02' },
  { id: 'projects', label: 'projects', num: '03' }, { id: 'experience', label: 'experience', num: '04' },
  { id: 'leadership', label: 'leadership', num: '05' }, { id: 'terminal', label: 'terminal', num: '06' },
];
export const aboutCards = [
  { title: 'languages', icon: 'code', content: 'Python, JavaScript, TypeScript, C++, HTML, Java, SQL' },
  { title: 'education', icon: 'book', content: 'B.S. Computer Engineering, Minor in Sales Engineering · University of Florida · Expected May 2029 · GPA 3.87' },
  { title: 'focus', icon: 'folder', content: 'Data engineering, computer vision, software development, and power delivery' },
];
export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80', caption: 'software development' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80', caption: 'robotics' },
];
export const projects = [
  { id: '01', title: 'Face Detection System', description: 'Real-time facial landmark mapping with OpenCV and MediaPipe, NumPy image processing, and a PySide6 interface.', tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PySide6'], image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80' },
  { id: '02', title: 'FlexRight', description: 'Hackathon fitness tool for live form correction. Calculated joint angles from YOLO pose coordinates, overlaid visual cues with OpenCV, and logged data in MongoDB.', tags: ['Python', 'MongoDB', 'Ultralytics', 'OpenCV', 'NumPy', 'Tkinter', 'Gradio'], github: 'https://github.com/abbyhepburn/FlexRight', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
  { id: '03', title: 'Support Bot', description: 'Document-aware chatbot using a retrieval-augmented generation pipeline to answer questions about uploaded PDF, DOCX, and TXT files.', tags: ['OpenAI', 'Python', 'Gradio'], github: 'https://github.com/abbyhepburn/Support-Bot', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
];
export const experience = [
  { date: 'Aug 2026 – Jan 2027', company: 'BeachLens', role: 'Data Engineer Intern', type: 'Internship', description: 'Structured beach and local-business data for an app with more than 20,000 downloads. Cleaned datasets for Supabase and built a Python pipeline using Jina and the Navigator API.', highlights: ['Python', 'Supabase'] },
  { date: 'May – Aug 2026', company: 'NextEra Energy', role: 'Power Delivery Engineer Intern', type: 'Internship', description: 'Validated distribution operations data for a grid serving over 6 million customer accounts. Analyzed load and circuit pathways for more than 30 distribution projects and audited field asset specifications.', highlights: ['distribution', 'data'] },
  { date: 'Oct 2025 – May 2026', company: 'UF Data Studio', role: 'Research Assistant', type: 'Research', description: 'Researched LLM-based synthetic prediction generation across finance, health, policy, weather, and sports. Evaluated prompting strategies and used Python and NaviGator Toolkit pipelines to generate 10–15 data batches per week.', highlights: ['Python', 'LLM'] },
];
export const leadership = [
  { id: '01', date: 'Current', org: 'National Society of Black Engineers', role: 'Technical Development Chair · Software Lead', description: 'Conduct software workshops for more than 200 members and guide software development for a self-balancing robot.' },
  { id: '02', date: 'Current', org: 'Real World Engineering', role: 'Software Design Team Lead', description: 'Lead software for a miniature autonomous robotic car, including control logic, sensor and ML decisions, and data tracking.' },
];
