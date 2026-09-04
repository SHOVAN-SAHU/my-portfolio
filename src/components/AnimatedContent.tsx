'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Rocket, Laptop, Database, Wrench, BookOpen, Calendar, Mail, Phone, Link, Briefcase, GraduationCap, Award, Globe, Smartphone, Target } from 'lucide-react';

interface AnimatedContentProps {
  content: string;
  delay?: number;
}

export default function AnimatedContent({ content, delay = 100 }: AnimatedContentProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lines = content.split('\n');

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setVisibleLines(0);
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, isMobile ? delay * 0.5 : delay); // Faster animation on mobile

    return () => clearInterval(timer);
  }, [content, delay, lines.length, isMobile]);

  // Function to convert URLs to clickable links
  const renderWithLinks = (text: string) => {
    const elements: (string | JSX.Element)[] = [];
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    let lastIndex = 0;
    let match;

    // First handle markdown-style links
    while ((match = mdLinkRegex.exec(text)) !== null) {
      const [fullMatch, label, url] = match;
      const index = match.index;

      // Push text before match, including raw URLs if any
      const preText = text.substring(lastIndex, index);
      preText.split(urlRegex).forEach((part, i) => {
        if (urlRegex.test(part)) {
          elements.push(
            <a
              key={`url-${index}-${i}`}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-amber underline hover:no-underline   transition-colors duration-200"
            >
              {part}
            </a>
          );
        } else {
          elements.push(part);
        }
      });

      // Push markdown link
      elements.push(
        <a
          key={`md-${index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-green hover:text-terminal-amber underline hover:no-underline   transition-colors duration-200"
        >
          {label}
        </a>
      );

      lastIndex = index + fullMatch.length;
    }

    // Push remaining text (may contain raw URLs)
    const remaining = text.substring(lastIndex);
    remaining.split(urlRegex).forEach((part, i) => {
      if (urlRegex.test(part)) {
        elements.push(
          <a
            key={`final-url-${i}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-green hover:text-terminal-amber underline hover:no-underline   transition-colors duration-200"
          >
            {part}
          </a>
        );
      } else {
        elements.push(part);
      }
    });

    return elements;
  };

  const formatLine = (line: string, index: number) => {
    if (index >= visibleLines) return null;
    
    const key = `line-${index}`;
    
    if (line.startsWith('# ')) {
      return (
        <div key={key} className="text-terminal-green text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 animate-fade-in flex items-center">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse flex-shrink-0" />
          <span className="break-words">{line.substring(2)}</span>
        </div>
      );
    }
    
    if (line.startsWith('## ')) {
      let icon: JSX.Element | null = null;
      let text = line.substring(3);
      let isPrefix = false;

      const tagMap: Record<string, JSX.Element> = {
        'rocket': <Rocket className="w-5 h-5 ml-2 inline-block" />,
        'laptop': <Laptop className="w-5 h-5 ml-2 inline-block" />,
        'database': <Database className="w-5 h-5 ml-2 inline-block" />,
        'wrench': <Wrench className="w-5 h-5 ml-2 inline-block" />,
        'books': <BookOpen className="w-5 h-5 ml-2 inline-block" />,
      };

      const prefixMap: Record<string, JSX.Element> = {
        'email ': <Mail className="w-5 h-5 mr-2 inline-block" />,
        'phone ': <Phone className="w-5 h-5 mr-2 inline-block" />,
        'link ': <Link className="w-5 h-5 mr-2 inline-block" />,
        'briefcase ': <Briefcase className="w-5 h-5 mr-2 inline-block" />,
        'graduation ': <GraduationCap className="w-5 h-5 mr-2 inline-block" />,
        'medal ': <Award className="w-5 h-5 mr-2 inline-block" />,
        'globe ': <Globe className="w-5 h-5 mr-2 inline-block" />,
        'mobile ': <Smartphone className="w-5 h-5 mr-2 inline-block" />,
        'target ': <Target className="w-5 h-5 mr-2 inline-block" />,
      };

      for (const [tag, Icon] of Object.entries(tagMap)) {
        if (text.endsWith(` ${tag}`)) {
          icon = Icon;
          text = text.substring(0, text.length - tag.length - 1);
          break;
        }
      }

      if (!icon) {
        for (const [prefix, Icon] of Object.entries(prefixMap)) {
          if (text.startsWith(prefix)) {
            icon = Icon;
            text = text.substring(prefix.length);
            isPrefix = true;
            break;
          }
        }
      }

      return (
        <div key={key} className="text-blue-400 text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 mt-4 sm:mt-6 animate-slide-up break-words flex items-center">
          {isPrefix && icon}
          <span>{renderWithLinks(text)}</span>
          {!isPrefix && icon}
        </div>
      );
    }
    
    if (line.startsWith('### ')) {
      return (
        <div key={key} className="text-purple-400 text-sm sm:text-base lg:text-lg font-semibold mb-2 mt-3 sm:mt-4 animate-slide-up break-words">
          {renderWithLinks(line.substring(4))}
        </div>
      );
    }
    
    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      return (
        <div key={key} className="text-yellow-400 font-bold mb-2 animate-fade-in text-sm sm:text-base break-words">
          {renderWithLinks(line.substring(2, line.length - 2))}
        </div>
      );
    }
    
    if (line.startsWith('- ')) {
      return (
        <div key={key} className="text-gray-300 ml-2 sm:ml-4 mb-1 hover:text-terminal-green transition-colors animate-slide-up text-sm sm:text-base">
          <span className="text-terminal-green mr-2">➤</span>
          <span className="break-words">{renderWithLinks(line.substring(2))}</span>
        </div>
      );
    }
    
    if (line.startsWith('date ')) {
      return (
        <div key={key} className="text-cyan-400 mb-2 animate-fade-in text-sm sm:text-base break-words flex items-center">
          <Calendar className="w-4 h-4 mr-2 inline-block" />
          {renderWithLinks(line.substring(5))}
        </div>
      );
    }
    
    // Handle lines with links or technical content
    if (line.includes('http') || line.includes('**Tech Stack:**') || line.includes('**GitHub:**')) {
      return (
        <div key={key} className="text-gray-300 mb-2 leading-relaxed animate-fade-in text-sm sm:text-base break-all sm:break-words">
          {renderWithLinks(line)}
        </div>
      );
    }
    
    return (
      <div key={key} className="text-gray-300 mb-2 leading-relaxed animate-fade-in text-sm sm:text-base break-words">
        {renderWithLinks(line)}
      </div>
    );
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] max-w-full overflow-hidden">
      <div className="max-w-none lg:max-w-4xl">
        {lines.map(formatLine)}
        {visibleLines < lines.length && (
          <div className="flex items-center mt-4">
            <div className="w-1 sm:w-2 h-4 sm:h-5 bg-terminal-green animate-terminal-blink" />
            <span className="ml-2 text-gray-500 text-xs sm:text-sm">
              {isMobile ? 'Loading...' : 'Loading content...'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}