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
  'python start.py',
  'sudo docker ps'
];

export const content = {
  about: `# About Me
  [📄 View My Resume](Shovan_Resume.pdf)

Hey there! I'm Shovan Sahu, a backend engineer passionate about building scalable systems,
microservices, and data pipelines. I specialize in Node.js, Django, and FastAPI, with
hands-on production experience designing distributed systems and high-performance APIs.

While I'm comfortable working across the full stack, my true focus is the backend —
crafting robust architectures, async processing pipelines, and RAG systems that solve
real-world complexity at scale.

## Core Expertise
- Microservices Architecture & REST API Design
- Async Processing & Background Job Pipelines
- RAG Pipelines & Vector Search (Qdrant, Elasticsearch)
- Distributed Systems & Database Optimization

## Current Focus
Building InsightsHub — a microservices-based RAG platform with document ingestion,
vector embeddings, and LLM inference, fully Dockerized for horizontal scaling.`,

  skills: `# Technical Arsenal

## Backend (My Passion) 🚀
- Node.js & Express.js
- Python — Django & FastAPI
- RESTful API Design & Microservices
- Async Processing with Bull.js (Redis)
- JWT Authentication & Middleware
- ETL Pipelines & Data Scraping

## Frontend (When Needed) 💻
- React.js
- JavaScript (ES6+)
- HTML5, CSS3 & Tailwind CSS
- WebSockets & Socket.io
- Optimistic UI Patterns

## Databases & Search 🗄️
- MongoDB (advanced indexing & aggregation)
- Redis (caching & job queues)
- Elasticsearch (full-text & faceted search)
- Qdrant (Vector DB for RAG)
- SQL & Cloudinary

## Infrastructure & Tools 🛠️
- Docker & Docker Compose
- Linux & Git / GitHub
- CI/CD (Basic)
- Postman & API Testing
- VS Code & Terminal

## Concepts 📚
- Microservices & Distributed Systems
- RAG Pipelines & Vector Embeddings
- Async Processing & WebSockets
- Elasticsearch at scale`,

  experience: `# Professional Journey

## Former Position
**Backend Developer Intern** | Oggangs Pvt. Ltd. — Bangalore, India (Remote)
📅 February 2025 – October 2025

Working on production backend systems, microservices, and data pipelines using
Node.js, Django, and FastAPI.

### Key Responsibilities:
- Built and maintained production REST APIs with Node.js (Express.js) handling
  authentication, business logic, and data validation at scale
- Implemented async background job pipelines using Bull.js (Redis), offloading
  data processing and scraping to reduce API latency
- Integrated Elasticsearch for full-text search and faceted filtering, achieving
  sub-second retrieval across millions of documents
- Built a Django microservice as both a REST API and a scraping engine — extracting,
  cleaning, and normalizing structured/unstructured data into enrichment pipelines
- Built APIs for an internal calling agent microservice: handled outbound lead calls,
  extracted structured data from conversations via LLM, applied hierarchy-matching
  logic, and auto-generated product records
- Designed MongoDB schemas with optimized indexing for high-write distributed workloads
- Containerized services using Docker

### Technologies Used:
- Node.js, Express.js, Django, FastAPI
- MongoDB, Redis, Elasticsearch
- Bull.js, Docker, JWT

### Achievements:
- Achieved sub-second search across millions of documents via Elasticsearch integration
- Reduced API latency significantly by offloading workflows to async Bull.js pipelines
- Built a fully containerized, independently deployable microservices architecture`,

  projects: `# Featured Projects

## 🎯 InsightsHub (RAG Platform)
**Tech Stack:** Express.js, FastAPI, React.js, Qdrant, Groq, Docker, Elasticlake
**Live:** https://insightshub.in | **Year:** 2026

- Architecting a microservices-based RAG platform: Express.js service handles auth,
  subscriptions/payments, space management, and document ingestion into MongoDB;
  FastAPI service owns the complete RAG pipeline
- RAG pipeline covers document extraction, text chunking, embedding generation,
  and vector storage in Qdrant, with LLM inference via Groq API
- Entire stack is Dockerized with services designed for independent deployability
  and horizontal scaling

## 🔗 SocialLoop (Social Media Platform)
**Tech Stack:** Express.js, React.js, MongoDB, Cloudinary, Socket.io
**Live:** https://socialloop.onrender.com
**GitHub:** https://github.com/SHOVAN-SAHU/SocialLoop-v-1.0.0 | **Year:** 2025

- Built a full-stack social media platform with image uploads via Cloudinary,
  follow graph, and feed generation using MongoDB aggregation pipelines
- Implemented real-time chat using Socket.io with concurrent connection handling
- Like/comment features with optimistic UI on the React.js frontend`,

  contact: `# Let's Connect!

I'm always open to discussing new opportunities, especially backend and distributed
systems roles. Feel free to reach out to collaborate or chat about tech!

## 📧 Email
shovansahu000@gmail.com

## 🔗 Social Links
- **GitHub:** https://github.com/SHOVAN-SAHU
- **LinkedIn:** https://www.linkedin.com/in/shovan-sahu
- **Resume:** [📄 View My Resume](Shovan_Resume.pdf)

## 💼 Open to:
- Backend / Backend-heavy Full-stack roles
- Distributed Systems & Microservices projects
- Freelance backend projects
- Technical collaborations
- Mentorship discussions

## 🎓 Education
B.Tech in Computer Science & Engineering
Swami Vivekananda University, Kolkata — 2025

## 🏅 Certifications
Backend Developer Internship Certificate — Oggangs Pvt. Ltd., 2025

## 🌍 Location
Based in Kolkata, West Bengal, India — open to remote opportunities worldwide.

## 📱 Response Time
I typically respond within 24 hours during weekdays.`
};