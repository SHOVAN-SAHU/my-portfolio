'use client';

import { useState, useEffect } from 'react';
import { Terminal, Cpu, Zap, Server, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { commands } from '@/lib/content';
import Navigation from './Navigation';
import BackgroundEffects from './BackgroundEffects';

interface TerminalLayoutProps {
  children: React.ReactNode;
}

export default function TerminalLayout({ children }: TerminalLayoutProps) {
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(15);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const commandTimer = setInterval(() => {
      setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }, 4000);

    const cpuTimer = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30 + 10));
    }, 3000);

    return () => {
      clearInterval(commandTimer);
      clearInterval(cpuTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green font-mono relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 max-w-7xl mx-auto p-2 sm:p-4">
        {/* Terminal Header */}
        <div className="bg-terminal-gray rounded-t-lg border-2 border-terminal-green shadow-2xl shadow-terminal-green/20">
          <div className="flex items-center justify-between p-2 sm:p-4">
            {/* Left side - Window controls */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            
            {/* Center - Terminal title (hidden on mobile) */}
            <div className="hidden sm:flex text-terminal-green font-bold items-center space-x-2">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">portfolio@shovan --backend-dev:~$</span>
            </div>
            
            {/* Mobile terminal title */}
            <div className="flex sm:hidden text-terminal-green font-bold items-center space-x-1">
              <Terminal className="w-4 h-4" />
              <span className="text-xs">portfolio@shovan</span>
            </div>
            
            {/* Right side - System stats */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green animate-spin" />
              <div className="text-xs text-gray-400 hidden sm:block">
                CPU: {cpuUsage}%
              </div>
              <div className="text-xs text-gray-400 sm:hidden">
                {cpuUsage}%
              </div>
            </div>
          </div>
          
          {/* Command Line */}
          <div className="px-2 pb-2 sm:px-4 sm:pb-4">
            <div className="flex items-center space-x-2 text-xs sm:text-sm overflow-hidden">
              <span className="text-terminal-green flex-shrink-0">$</span>
              <span className="text-gray-300 truncate">
                {isTyping ? currentCommand : 'Ready for commands...'}
              </span>
              <span className="w-1 h-3 sm:w-2 sm:h-5 bg-terminal-green animate-terminal-blink flex-shrink-0" />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-terminal-bg border-x-2 border-b-2 border-terminal-green rounded-b-lg shadow-2xl shadow-terminal-green/20">
          <Navigation />
          
          <div className="bg-gradient-to-br from-terminal-bg to-terminal-dark min-h-[400px] sm:min-h-[500px]">
            {children}
          </div>
          
          {/* Footer */}
          <div className="border-t border-gray-700 p-2 sm:p-4 bg-terminal-gray">
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 gap-2 sm:gap-4">
              {/* Status indicators */}
              <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
                <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                  <span className="hidden sm:inline">Backend Developer</span>
                  <span className="sm:hidden">Backend Dev</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                  <Server className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                  <span className="hidden sm:inline">Node.js Enthusiast</span>
                  <span className="sm:hidden">Node.js</span>
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
                <a 
                  href="https://github.com/SHOVAN-SAHU"
                  target='_blank'
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-terminal-green transition-colors whitespace-nowrap"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/shovan-sahu-a5967b242/"
                  target='_blank'
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">LinkedIn</span>
                </a>
                <a 
                  href="mailto:shovansahu000@gmail.com"
                  target='_blank'
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-purple-400 transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="mt-2 sm:mt-4 bg-terminal-gray rounded-lg p-2 sm:p-3 border-2 border-terminal-green/30">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 text-xs sm:text-sm gap-2">
            <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
              <span className="text-terminal-green whitespace-nowrap">● Online</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-400 whitespace-nowrap">Backend Dev Mode</span>
              <span className="text-gray-400">|</span>
              <span className="text-purple-400 whitespace-nowrap">Oggangs Intern</span>
            </div>
            <div className="text-gray-400 text-right sm:text-left">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}