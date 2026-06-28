export const personalInfo = {
  name: 'Shaimaa Yasser',
  firstName: 'Shaimaa',
  lastName: 'Yasser',
  title: 'Junior Full-Stack Developer',
  subtitle: 'MERN Stack Developer',
  location: 'Sohag, Egypt',
  phone: '+20 100 967 4380',
  email: 'shaimaay373@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shaimaa-yasser-45859a277',
  github: 'https://github.com/shaimaay373',
  profileImage: '/images/profile.png',
  available: true,
};

export const summary =
  'Detail-oriented Junior Full-Stack Developer skilled in MERN stack development, responsive web applications, backend APIs, authentication systems, and database management. Strong problem-solving, teamwork, communication, and fast-learning abilities with hands-on project experience.';

export const education = {
  institution: 'Faculty of Commerce – BIS Department',
  degree: "Bachelor's in Business Information Systems (BIS)",
  graduationYear: '2025',
  gpa: '3.3 / 4 (B+)',
  project: {
    title: 'Makkany – Online Learning Platform for Graduates',
    description: 'Graduation project focused on online learning for graduates.',
  },
};

export const experience = [
  {
    title: 'ITI Assiut Branch (ICC)',
    period: 'Jan 2026 – Jun 2026',
    type: 'Internship & Training',
  },
  {
    title: 'React.js Front-End Development Training',
    period: 'Nov 2025 – Jan 2026',
    type: 'Training',
  },
  {
    title: 'ERP System Training – Onyx Company',
    period: '2024',
    type: 'Training',
  },
  {
    title: 'ICPC Assiut University Community',
    period: '2023',
    type: 'Community',
  },
];

export const certifications = [
  'InnovEgypt Program',
  '.NET MVC Training – ITI Minia Branch',
  'Stock Market Simulation – SMS-AU',
  'ECPC Programming Contest – Assiut University Community',
];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'React.js', 'Next.js', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MongoDB'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'GraphQL'],
  },
  {
    title: 'Programming',
    icon: 'code',
    skills: ['C++'],
  },
  {
    title: 'Soft Skills',
    icon: 'soft',
    skills: ['Communication', 'Presentation', 'Problem Solving', 'Team Building'],
  },
  {
    title: 'Languages',
    icon: 'languages',
    skills: ['Arabic (Native)', 'English'],
  },
];

export const projects = [
  {
    id: 'online-courses',
    title: 'Online Courses Platform',
    category: 'Full-Stack',
    description:
      'Developed LearnHub — a full-stack online learning platform with secure authentication, course browsing & filtering, enrollment, instructor dashboard, role-based access, and responsive dark-mode UI.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/shaimaay373/online-course-platform',
    liveDemo: null,
    images: [
      '/images/projects/online-courses/hero.png',
      '/images/projects/online-courses/courses.png',
      '/images/projects/online-courses/dashboard.png',
    ],
    gradient: 'linear-gradient(135deg, #1a1040, #2d1b69)',
  },
  {
    id: 'next-ecommerce',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description:
      'ShopNow — scalable Next.js e-commerce platform with authentication, category browsing, product filters, shopping cart, role-based registration (Customer/Seller), and product detail pages.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/shaimaay373/next-ecommerce',
    liveDemo: null,
    images: [
      '/images/projects/next-ecommerce/home.png',
      '/images/projects/next-ecommerce/categories.png',
      '/images/projects/next-ecommerce/shop.png',
      '/images/projects/next-ecommerce/product-detail.png',
      '/images/projects/next-ecommerce/register.png',
    ],
    gradient: 'linear-gradient(135deg, #0f2027, #203a43)',
  },
  {
    id: 'stylish-ecommerce',
    title: 'Stylish E-Commerce',
    category: 'E-Commerce',
    description:
      'Full-stack e-commerce solution with authentication, product catalog management, shopping cart functionality, and responsive UI.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shaimaay373/stylish-ecommerce',
    liveDemo: null,
    images: [],
    gradient: 'linear-gradient(135deg, #1a0533, #3b0f63)',
  },
  {
    id: 'hosto',
    title: 'Responsive Landing Page',
    category: 'Landing Page',
    description:
      'HOSTO — modern responsive landing page with hero, features, pricing plans, and mobile-first layout across desktop, tablet, and phone.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/shaimaay373/Hosto',
    liveDemo: null,
    images: ['/images/projects/hosto/responsive-mockup.png'],
    gradient: 'linear-gradient(135deg, #0d1b2a, #1b4332)',
  },
  {
    id: 'casmart',
    title: 'Casmart E-Commerce Website',
    category: 'E-Commerce',
    description:
      'Fashion e-commerce website with hero section, category browsing, product grid, add-to-cart, blog, and a full responsive footer with payment support.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shaimaay373/Casmart-E-Commerce-Website',
    liveDemo: null,
    images: [
      '/images/projects/casmart/hero.png',
      '/images/projects/casmart/categories.png',
      '/images/projects/casmart/features.png',
      '/images/projects/casmart/products.png',
      '/images/projects/casmart/cart.png',
      '/images/projects/casmart/blog.png',
      '/images/projects/casmart/footer.png',
    ],
    gradient: 'linear-gradient(135deg, #2d0a0a, #4a1942)',
  },
  {
    id: 'beauty-products',
    title: 'Beauty Products Manager',
    category: 'CRUD App',
    description:
      'Dynamic CRUD app for managing beauty products — add, view, and delete items with API integration, product details, and a responsive pink-themed UI.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    github: 'https://github.com/shaimaay373/item-lister',
    liveDemo: null,
    images: [
      '/images/projects/beauty-products/list.png',
      '/images/projects/beauty-products/detail.png',
    ],
    gradient: 'linear-gradient(135deg, #4a1942, #fce7f3)',
  },
];

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const highlights = [
  { value: '6+', label: 'Projects Built' },
  { value: 'MERN', label: 'Stack Focus' },
  { value: '2025', label: 'BIS Graduate' },
  { value: 'ITI', label: 'ICC Trainee' },
];
