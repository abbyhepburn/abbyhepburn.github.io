export const site = {
  name: 'Abby Hepburn',
  firstName: 'abby',
  lastName: 'hepburn',
  email: 'abbyhepburn@icloud.com',
  github: 'https://github.com/abbyhepburn',
  linkedin: 'https://www.linkedin.com/in/abigail-hepburn',
  location: 'Gainesville, FL',
  tagline:
    "Computer Engineering student building thoughtful software — from rehab tech and nutrition apps to robotics and command-line tools.",
  philosophy:
    "I'm not afraid of being lost, but of staying lost.",
  philosophyContext:
    'My goal is to work in environments where nobody is left behind, and to build things that help us all move forward.',
  roles: ['software engineer', 'problem solver', 'builder'],
  skills: [
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'C++',
    'OpenCV',
    'MongoDB',
    'SQL',
    'Git',
    'YOLOv8',
  ],
};
export const navLinks = [
  { id: 'about', label: 'about', num: '01' },
  { id: 'gallery', label: 'gallery', num: '02' },
  { id: 'projects', label: 'projects', num: '03' },
  { id: 'experience', label: 'experience', num: '04' },
  { id: 'leadership', label: 'leadership', num: '05' },
  { id: 'terminal', label: 'terminal', num: '06' },
];
export const aboutCards = [
  {
    title: 'languages',
    icon: 'code',
    content: 'Python, JavaScript/TypeScript, C++, HTML/CSS, SQL, Java',
  },
  {
    title: 'education',
    icon: 'book',
    content: 'B.S. Computer Engineering @ University of Florida',
  },
  {
    title: 'focus',
    icon: 'folder',
    content: 'Full-stack development, computer vision, and embedded systems',
  },
];
export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    caption: 'collaborating on a team project',
  },
  {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    caption: 'late-night coding session',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    caption: 'hackathon with friends',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
    caption: 'campus study group',
  },
];
export const projects = [
  {
    id: '01',
    title: 'FlexRight',
    description:
      'Real-time AI skeletal tracking for physical rehab using YOLOv8 and OpenCV. Monitors form via webcam and syncs rep counts and joint angles to MongoDB for remote clinical review.',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'MongoDB'],
    github: 'https://github.com/abbyhepburn/FlexRight',
    demo: 'https://devpost.com/abbyhepburn',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    id: '02',
    title: 'NutriTrack',
    description:
      'A web app that helps users improve their health by combining BMI calculation with personalized nutrition advice.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Web'],
    github: 'https://github.com/abbyhepburn/NutriTrack',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  },
  {
    id: '03',
    title: 'EcoLog',
    description:
      'Command-line activity tracker where logged eco-friendly actions earn points to unlock and grow virtual animals while learning about endangered species.',
    tags: ['Python', 'CLI', 'Game'],
    github: 'https://github.com/abbyhepburn/EcoLog',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  },
  {
    id: '04',
    title: 'Support-Bot',
    description:
      'A chatbot client that provides answers based on the user\'s uploaded documents — bringing document Q&A to a simple interface.',
    tags: ['Python', 'AI', 'NLP'],
    github: 'https://github.com/abbyhepburn/Support-Bot',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: '05',
    title: 'Real-World Engineering',
    description:
      'Software components for a robotic hand project — bridging embedded systems and practical engineering.',
    tags: ['C++', 'Robotics', 'Embedded'],
    github: 'https://github.com/abbyhepburn/Real-World-Engineering',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: '06',
    title: 'Blackjack',
    description:
      'A command-line recreation of the classic card game — built from scratch with clean game logic and user interaction.',
    tags: ['Python', 'CLI', 'Game'],
    github: 'https://github.com/abbyhepburn/Blackjack',
    image:
      'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&q=80',
  },
];
export const experience = [
  {
    date: 'Summer 2026',
    company: 'NextEra Energy',
    role: 'Computer Engineering Intern',
    type: 'Internship',
    linkedin: 'https://www.linkedin.com/company/nextera-energy-inc',
    description:
      'Accepted a summer internship through the Power Delivery College Internship Program, working on computer engineering projects in the energy sector.',
    highlights: ['Power Delivery', 'Computer Engineering', 'Internship'],
  },
  {
    date: '2024 - Present',
    company: 'UF Trailblazers',
    role: 'Software Team Member',
    type: 'Project Team',
    description:
      'Contributing to the software team on outreach and engineering projects — building tools and collaborating across mechanical, electrical, and data teams.',
    highlights: ['Software Team', 'Collaboration', 'Outreach'],
  },
];
export const leadership = [
  {
    id: '01',
    date: '2024 - Present',
    org: 'UF Trailblazers',
    role: 'Team Member & Relay Captain',
    description:
      'Served as team captain for Relay For Life, raising funds for cancer research while leading outreach and community engagement initiatives.',
  },
  {
    id: '02',
    date: '2024 - Present',
    org: 'NSBE — National Society of Black Engineers',
    role: 'Member',
    description:
      'Active member supporting professional development, community, and technical growth for Black engineers in tech.',
  },
  {
    id: '03',
    date: '2024 - Present',
    org: 'UF Computer Engineering Community',
    role: 'Student Developer',
    description:
      'Building projects across software, robotics, and data teams while mentoring peers on Git, GitHub, and collaborative development workflows.',
  },
];