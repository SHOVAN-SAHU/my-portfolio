'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface OutputState {
  command: string;
  text: string;
  type: 'output' | 'error' | 'success' | 'info' | 'nav';
}

/* ── Static responses ─────────────────────────────────────── */

const WHOAMI_TEXT = `Shovan Sahu
Backend Developer
Node.js · Django · FastAPI
📍 Kolkata, West Bengal, India
📧 shovansahu000@gmail.com
🐙 github.com/SHOVAN-SAHU
💼 linkedin.com/in/shovan-sahu`;

const HELP_TEXT = `Navigation commands
  cat projects      → Projects page
  cat skills        → Skills page
  cat experience    → Experience page
  cat contact       → Contact page
  cat resume        → Open resume (PDF)
  cd /projects | /skills | /experience | /contact | ~
  open <page>       → Open any page
  open resume       → Open resume (PDF)

Social commands
  open github       → GitHub profile (new tab)
  open linkedin     → LinkedIn profile (new tab)
  open email        → Compose email to Shovan

Info commands
  whoami            → Who is Shovan?
  pwd               → Current page path
  location          → Current page path (alias)
  date              → Current date & time
  uptime            → System uptime
  ls                → List sections
  git status        → Git status
  git log           → Recent commits
  uname -a          → System info
  echo <text>       → Echo text
  clear             → Clear output
  help              → This message`;

const GIT_STATUS = `On branch main  ·  origin/main (up to date)
nothing to commit, working tree clean
✓ Portfolio live at https://shovanportfolio.vercel.app/`;

const GIT_LOG = `a3f2c1d  feat: interactive terminal CLI         (HEAD)
9b8e4f2  feat: project showcase & skills sections
4c5d1a7  feat: experience & contact pages
1d0c3b9  init: terminal-theme portfolio`;

const UNAME = `Linux portfolio-shovan 6.1.0 · x86_64
Node.js v20.11  ·  Next.js 14  ·  TypeScript 5
Kernel: Backend-Optimized  ·  RAM: Unlimited Curiosity`;

const LS = `drwxr-xr-x  home/
drwxr-xr-x  skills/
drwxr-xr-x  experience/
drwxr-xr-x  projects/
drwxr-xr-x  contact/`;

/* ── Page routing map ─────────────────────────────────────── */

const NAV: Record<string, string> = {
  home: '/', '/': '/', '~': '/',
  projects: '/projects', '/projects': '/projects',
  skills: '/skills', '/skills': '/skills',
  experience: '/experience', '/experience': '/experience',
  contact: '/contact', '/contact': '/contact',
};

const resolve = (t: string) => NAV[t.toLowerCase().trim()] ?? null;

/* ── Tab‑completion list ─────────────────────────────────── */

const COMPLETIONS = [
  'whoami','help','pwd','location','where','date','uptime','ls','clear',
  'git status','git log','uname -a',
  'cat projects','cat skills','cat experience','cat contact','cat resume',
  'cd /projects','cd /skills','cd /experience','cd /contact','cd ~',
  'open projects','open skills','open experience','open contact','open home',
  'open resume','open github','open linkedin','open email',
  'github','linkedin','email',
  'echo ',
];

/* ─────────────────────────────────────────────────────────── */

export default function TerminalInput() {
  const router   = useRouter();
  const pathname = usePathname();
  const [input, setInput]     = useState('');
  const [output, setOutput]   = useState<OutputState | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistIdx] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const run = (raw: string) => {
    const cmd   = raw.trim();
    if (!cmd) return;

    setHistory(h => [cmd, ...h.slice(0, 49)]);
    setHistIdx(-1);

    const lower = cmd.toLowerCase();
    const parts = lower.split(/\s+/);
    const verb  = parts[0];
    const rest  = parts.slice(1).join(' ');

    const set = (type: OutputState['type'], text: string) =>
      setOutput({ command: cmd, type, text });

    if (lower === 'clear' || lower === 'cls')  { setOutput(null); return; }
    if (lower === 'help' || lower === '--help') { set('info', HELP_TEXT); return; }
    if (lower === 'whoami')                     { set('success', WHOAMI_TEXT); return; }
    if (lower === 'pwd' || lower === 'location' || lower === 'where' || lower === 'cwd') {
      const pageMap: Record<string, string> = {
        '/':           'home',
        '/skills':     'skills',
        '/experience': 'experience',
        '/projects':   'projects',
        '/contact':    'contact',
      };
      const pageName = pageMap[pathname] ?? pathname.replace('/', '');
      set('output', `portfolio/${pageName}`);
      return;
    }
    if (lower === 'date')                       { set('output', new Date().toString()); return; }
    if (lower === 'uptime' || lower === 'uptime -p') {
      set('output', 'up since 2022  ·  3+ years of backend engineering\n✓ APIs: responding  ·  Coffee: ∞'); return;
    }
    if (lower === 'uname' || lower === 'uname -a') { set('output', UNAME); return; }
    if (lower === 'git status')                 { set('success', GIT_STATUS); return; }
    if (lower === 'git log' || lower === 'git log --oneline') { set('output', GIT_LOG); return; }
    if (lower === 'ls' || lower === 'ls -la' || lower === 'dir') { set('output', LS); return; }
    if (verb === 'echo') { set('output', cmd.slice(5).trim()); return; }
    // ── resume ──────────────────────────────────────────
    const isResume =
      lower === 'cat resume' ||
      lower === 'cat resume.pdf' ||
      lower === 'open resume' ||
      lower === 'view resume' ||
      lower === 'resume';
    if (isResume) {
      set('nav', '→ Opening Shovan_Resume.pdf…');
      setTimeout(() => window.open('/Shovan_Resume.pdf', '_blank'), 350);
      return;
    }

    if (lower === 'npm run dev' || lower === 'npm start') {
      set('success', '> next dev\n✓ Ready on http://localhost:3000  (already running!)'); return;
    }
    if (lower === 'node server.js') {
      set('success', 'Server running on http://localhost:8000\n✓ Express.js + MongoDB connected'); return;
    }
    if (lower === 'python start.py' || lower === 'python3 start.py') {
      set('success', 'FastAPI  →  http://localhost:8001\nINFO: Application startup complete.'); return;
    }
    if (verb === 'sudo') {
      set('error', 'sudo: permission denied\nShovan doesn\'t give root access to visitors 😄'); return;
    }
    if (lower === 'exit' || lower === 'quit') {
      set('info', 'You can\'t quit — portfolio is too good to leave! 😄\nTry  help  to explore.'); return;
    }

    // ── navigation verbs ──────────────────────────────────
    if (verb === 'cat' || verb === 'cd' || verb === 'open' || verb === 'go' || verb === 'visit') {
      const target = rest.replace(/\.md$/, '').replace(/\/$/, '').replace(/^\//, '') || rest;
      const path   = resolve(verb === 'cd' ? rest : target) ?? resolve(rest.replace(/^\//, ''));
      if (path) {
        set('nav', `→ Navigating to /${target.replace(/^~$/, 'home')}…`);
        setTimeout(() => router.push(path), 350);
        return;
      }
    }

    // ── social links ──────────────────────────────────────
    const isGithub   = lower === 'github'   || lower === 'open github'   || lower === 'cat github';
    const isLinkedin = lower === 'linkedin' || lower === 'open linkedin' || lower === 'cat linkedin';
    const isEmail    = lower === 'email'    || lower === 'open email'    || lower === 'mail' || lower === 'mailto';

    if (isGithub) {
      set('nav', '→ Opening github.com/SHOVAN-SAHU…');
      setTimeout(() => window.open('https://github.com/SHOVAN-SAHU', '_blank'), 350);
      return;
    }
    if (isLinkedin) {
      set('nav', '→ Opening linkedin.com/in/shovan-sahu…');
      setTimeout(() => window.open('https://www.linkedin.com/in/shovan-sahu', '_blank'), 350);
      return;
    }
    if (isEmail) {
      set('nav', '→ Opening email client — shovansahu000@gmail.com…');
      setTimeout(() => window.open('mailto:shovansahu000@gmail.com', '_blank'), 350);
      return;
    }

    set('error', `bash: ${verb}: command not found\nType  help  to see available commands.`);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { run(input); setInput(''); }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? '');
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMPLETIONS.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const outputColor = {
    success: 'text-terminal-green',
    error:   'text-red-400',
    nav:     'text-blue-400',
    info:    'text-yellow-300',
    output:  'text-gray-300',
  };

  return (
    <div
      className="bg-terminal-gray backdrop-blur-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* ── Output area (only latest response) ─────────────── */}
      {output && (
        <div className="px-4 pt-3 pb-2 animate-fade-in">
          {/* echoed command */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-terminal-green/60 text-xs select-none">$</span>
            <span className="text-terminal-green/80 text-xs font-mono">{output.command}</span>
          </div>
          {/* response */}
          <div
            className={`
              text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words
              pl-4 border-l-2 border-terminal-green/20
              ${outputColor[output.type]}
            `}
          >
            {output.text}
          </div>
        </div>
      )}

      {/* ── Input row ──────────────────────────────────────── */}
      <div className="flex items-center px-4 py-2.5 sm:py-3 gap-0">
        {/* Prompt badge */}
        <div className="flex items-center gap-1.5 flex-shrink-0 mr-2">
          <ChevronRight className="w-3.5 h-3.5 text-terminal-green" />
          <span className="text-terminal-green text-xs sm:text-sm font-mono font-semibold select-none leading-none">
            shovan<span className="text-gray-400">@portfolio</span>
            <span className="text-gray-500 hidden sm:inline">:~</span>
            <span className="text-terminal-green/70">$</span>
          </span>
        </div>

        {/* Blinking cursor — visible when idle, hidden while typing (native caret takes over) */}
        <span
          className={`
            inline-block w-[2px] h-[14px] sm:h-[16px] bg-terminal-green flex-shrink-0 mr-1
            ${isFocused ? 'opacity-0' : 'animate-terminal-blink'}
          `}
        />

        {/* Input field */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder={isFocused ? '' : 'type a command… (try: help)'}
          className="
            flex-1 min-w-0 bg-transparent border-none outline-none ring-0
            text-gray-100 text-xs sm:text-sm font-mono
            placeholder:text-gray-500 placeholder:text-xs
            caret-terminal-green
          "
          aria-label="Terminal command input"
          id="terminal-command-input"
        />
      </div>
    </div>
  );
}
