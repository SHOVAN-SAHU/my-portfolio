import { 
  Terminal, 
  Code, 
  Server, 
  Database, 
  Mail, 
  User as UserIcon, 
  Briefcase 
} from 'lucide-react';
import { Section } from '@/types';

export const sections: Section[] = [
  {
    id: 'about',
    title: 'About Me',
    icon: <UserIcon className="w-5 h-5" />,
    path: '/about',
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    icon: <Code className="w-5 h-5" />,
    path: '/skills',
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: <Briefcase className="w-5 h-5" />,
    path: '/experience',
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <Database className="w-5 h-5" />,
    path: '/projects',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <Mail className="w-5 h-5" />,
    path: '/contact',
  },
];

export const commands = [
  'whoami',
  'ls -la skills/',
  'cat experience.md',
  'tree projects/',
  'contact --help',
  'npm run dev',
  'git status',
  'node server.js',
];

export const content = {
  about: `# About Me                                              
  [📄 View My Resume](Shovan_Resume.pdf)

Hey there! I'm Shovan Sahu a passionate MERN Stack Developer with a deep love for backend development. 
Currently working as an intern at Oggangs since January 31, 2025, where I'm building 
scalable server-side solutions using Node.js and Express.js.

While I can work with the full stack, my heart truly belongs to backend development - 
crafting robust APIs, designing efficient databases, and solving complex server-side challenges.

## Core Expertise
- Backend Architecture & Design
- RESTful API Development  
- Database Optimization
- Server Performance Tuning

## Current Focus
Building scalable, maintainable backend systems that can handle real-world complexity.`,

  skills: `# Technical Arsenal

## Backend (My Passion) 🚀
- Node.js & Express.js
- MongoDB & Mongoose
- RESTful API Design
- JWT Authentication
- Middleware Development
- Database Design & Optimization

## Frontend (When Needed) 💻
- React.js & Next.js
- JavaScript (ES6+)
- TypeScript
- HTML5 & CSS3
- Responsive Design

## Tools & Technologies 🛠️
- Git & GitHub
- Postman & API Testing
- Docker (Learning)
- Linux/Unix Systems
- VS Code & Terminal

## Currently Learning 📚
- Microservices Architecture
- Redis & Caching
- GraphQL
- AWS Services`,

  experience: `# Professional Journey

## Current Position
**Backend Developer Intern** | Oggangs
📅 January 31, 2025 - Present

Working on backend systems and API development using Node.js and Express.js.
Focusing on building scalable server-side applications and optimizing database performance.

### Key Responsibilities:
- Developing robust backend APIs
- Database design and optimization
- Server-side logic implementation
- Code review and testing
- Performance monitoring and optimization

### Technologies Used:
- Node.js, Express.js
- MongoDB, Mongoose
- JWT Authentication
- RESTful API Design

### Achievements:
- Improved API response time by 40%
- Implemented secure authentication system
- Built scalable database architecture`,

  projects: `# Featured Projects

## 🎯 Socila Loop (Social Media platform)
**Tech Stack:** 
  Backend - Node.js, Express.js, MongoDB, Socket.io, Multer, JWT
  Frontend - React.js, Tailwind CSS, Redux
**Project Link:** https://socialloop.onrender.com
**GitHub:** https://github.com/SHOVAN-SAHU/SocialLoop-v-1.0.0

- Built complete RESTful API for social media platform
- Implemented JWT authentication & authorization
- Real-time messaging with Socket.io
- Performance optimization for 10k+ concurrent users
- Comprehensive API documentation`,

  contact: `# Let's Connect!

I'm always open to discussing new opportunities, especially backend development roles.
Feel free to reach out if you'd like to collaborate or just chat about tech!

## 📧 Email
shovansahu000@gmail.com

## 🔗 Social Links
- **GitHub:** https://github.com/SHOVAN-SAHU
- **LinkedIn:** https://www.linkedin.com/in/shovan-sahu-a5967b242 
- **Portfolio:** portfolio-website.com
- **Resume:** [📄 View My Resume](Shovan_Resume.pdf)

## 💼 Open to:
- Backend Developer positions
- Full-stack opportunities
- Freelance projects
- Technical collaborations
- Mentorship discussions

## 🌍 Location
Currently based in India, open to remote opportunities worldwide.

## 📱 Response Time
I typically respond within 24 hours during weekdays.`
};