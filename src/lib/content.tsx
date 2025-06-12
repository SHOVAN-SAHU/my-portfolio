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

## 🎯 Social Media Backend API
**Tech Stack:** Node.js, Express.js, MongoDB, Socket.io
**GitHub:** github.com/username/social-api

- Built complete RESTful API for social media platform
- Implemented JWT authentication & authorization
- Real-time messaging with Socket.io
- Performance optimization for 10k+ concurrent users
- Comprehensive API documentation

## 🛒 E-commerce Backend System
**Tech Stack:** Node.js, Express.js, PostgreSQL, Redis
**GitHub:** github.com/username/ecommerce-api

- Developed scalable e-commerce API
- Payment gateway integration (Stripe)
- Order management system
- Admin dashboard APIs
- Inventory management system

## 📊 Analytics Dashboard API
**Tech Stack:** Node.js, Express.js, MongoDB, WebSocket
**GitHub:** github.com/username/analytics-api

- Real-time data processing
- Complex aggregation pipelines
- WebSocket integration for live updates
- Performance monitoring
- Data visualization endpoints

## 🔐 Authentication Microservice
**Tech Stack:** Node.js, Express.js, MongoDB, Redis
**GitHub:** github.com/username/auth-service

- JWT-based authentication system
- Role-based access control
- Rate limiting and security middleware
- Password encryption and validation
- Session management with Redis`,

  contact: `# Let's Connect!

I'm always open to discussing new opportunities, especially backend development roles.
Feel free to reach out if you'd like to collaborate or just chat about tech!

## 📧 Email
shovansahu000@gmail.com

## 🔗 Social Links
- **GitHub:** github.com/SHOVAN-SAHU
- **LinkedIn:** linkedin.com/in/username  
- **Portfolio:** portfolio-website.com
- **Resume:** Download my latest resume

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