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
  [View My Resume](Shovan_Sahu_Resume.pdf)

Backend Developer with experience building fast, scalable APIs and reliable data pipelines. Skilled in Node.js, TypeScript, and Python, with a strong focus on system reliability, event-driven architecture, AI integrations, and cloud deployments. Passionate about solving complex problems and designing backend systems.

## Core Expertise
- Microservices Architecture & REST API Design
- Async Processing & Background Job Pipelines
- RAG Pipelines & Vector Search (Qdrant, Elasticsearch)
- Distributed Systems & Database Optimization

## Current Focus
Building InsightsHub — a microservices-based RAG platform with document ingestion, vector embeddings, and LLM inference, fully Dockerized for horizontal scaling.
Focusing on system design and scalable backend systems.`,

  skills: `# Technical Arsenal

## Backend rocket
- Node.js & Express.js, TypeScript, Python
- Frameworks: Bun, FastAPI, Django
- RESTful API Design & Microservices
- Async Processing with Bull.js (Redis) & NATS
- JWT Authentication & Middleware
- ETL Pipelines & Data Scraping

## Frontend laptop
- React.js, Redux, Tailwind CSS
- JavaScript (ES6+), TypeScript
- HTML5, CSS3
- WebSockets & Socket.io

## Databases & Search database
- MongoDB (advanced indexing & aggregation), PostgreSQL
- Redis (caching & job queues)
- Elasticsearch (full-text & faceted search)
- Qdrant (Vector DB for RAG)

## Infrastructure & Tools wrench
- Docker & Docker Compose
- AWS (EC2, S3), Render, Vercel
- Linux & Git / GitHub
- Postman & API Testing

## Concepts books
- Microservices & Distributed Systems
- Event-Driven Design, Async Background Processing
- RAG Pipelines & Vector Embeddings
- MCP (Model Context Protocol)`,

  experience: `# Professional Journey

## Backend Developer Intern
**HangoutX Media Pvt. Ltd. | Noida, India (Remote)**
date Sep 2026 – Present

- Cut socket and API latency from ~2s to ~300ms (~85% faster) through Redis caching, query optimization, and
streamlined request handling in Node.js.
- Implemented Redis caching with a 1-hour TTL, cutting repeated database calls to 0 within the cache window
and significantly reducing database load.
- Built asynchronous task pipelines with BullMQ and Redis to offload heavy-lifting tasks, keeping APIs and
sockets responsive under load.
- Improved AI response quality by refining system prompts and context handling for more relevant answers.

## Backend Developer Intern
**Oggangs Pvt. Ltd. | Bangalore, India (Remote)**
date Feb 2025 – Oct 2025

- Built and optimized core REST APIs with Node.js and Express.js, handling secure auth and business logic for 50,000+ monthly requests.
- Designed asynchronous background job pipelines with Bull.js and Redis, offloading heavy scraping workloads and cutting core API latency by 42%.
- Used NATS pub/sub to decouple internal services and stream event data between the API layer and background workers.
- Built a Python microservice for an ETL pipeline that cleaned and processed raw text data with a 95% success rate.
- Configured Elasticsearch for full-text search and faceted filtering, achieving sub-100ms retrieval across 2M+ documents.
- Built AI-driven APIs to extract structured data from conversations using LLMs, cutting manual data entry by 60%.

## Freelance Developer
**Remote**
date Mar 2024 – Dec 2024

- Built and shipped full-stack apps for multiple independent clients using Node.js, Express.js, React.js and MongoDB.
- Designed a real-time messaging feature with Socket.io, tuned for low-latency delivery under concurrent connection load.
- Handled end-to-end client communication, requirements gathering, and deployment for each engagement.`,

  projects: `# Featured Projects

## target InsightsHub (RAG Platform)
**Tech Stack:** Express.js, FastAPI, React.js, Qdrant, Groq, Docker, Elasticlake
**Live:** https://insightshub.in | **Year:** 2026

- Architecting a microservices-based RAG platform: Express.js service handles auth,
  subscriptions/payments, space management, and document ingestion into MongoDB;
  FastAPI service owns the complete RAG pipeline
- RAG pipeline covers document extraction, text chunking, embedding generation,
  and vector storage in Qdrant, with LLM inference via Groq API
- Entire stack is Dockerized with services designed for independent deployability
  and horizontal scaling

## link SocialLoop (Social Media Platform)
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

## email Email
shovansahu000@gmail.com

## phone Phone
+91 9832432155

## link Social Links
- **GitHub:** https://github.com/SHOVAN-SAHU
- **LinkedIn:** https://www.linkedin.com/in/shovan-sahu
- **Resume:** [View My Resume](Shovan_Sahu_Resume.pdf)

## briefcase Open to:
- Backend / Backend-heavy Full-stack roles
- Distributed Systems & Microservices projects
- Freelance backend projects
- Technical collaborations
- Mentorship discussions

## graduation Education
B.Tech in Computer Science & Engineering
Swami Vivekananda University, Kolkata — 2025

## medal Certifications
Backend Developer Internship Certificate — Oggangs Pvt. Ltd., 2025

## globe Location
Based in Kolkata, West Bengal, India — open to remote opportunities worldwide.

## mobile Response Time
I typically respond within 24 hours during weekdays.`
};