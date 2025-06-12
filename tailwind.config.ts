import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Custom breakpoints for specific use cases
        'mobile': {'max': '639px'},
        'tablet': {'min': '640px', 'max': '1023px'},
        'desktop': {'min': '1024px'},
        'wide': {'min': '1920px'},
        // Print styles
        'print': {'raw': 'print'},
        // Dark mode preference
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
      colors: {
        terminal: {
          green: '#00ff41',
          bg: '#0d1117',
          gray: '#1f2937',
          dark: '#0a0e16',
          amber: '#fbbf24',
          red: '#ef4444',
          blue: '#3b82f6',
        },
        // Extended color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent colors
        accent: {
          orange: '#ff6b35',
          purple: '#8b5cf6',
          pink: '#ec4899',
          teal: '#14b8a6',
        },
        // Status colors
        success: {
          light: '#bbf7d0',
          DEFAULT: '#10b981',
          dark: '#065f46',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#92400e',
        },
        error: {
          light: '#fecaca',
          DEFAULT: '#ef4444',
          dark: '#991b1b',
        },
        info: {
          light: '#dbeafe',
          DEFAULT: '#3b82f6',
          dark: '#1e40af',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 65, 0.3)',
        'terminal-strong': '0 0 40px rgba(0, 255, 65, 0.5)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
      },
      animation: {
        'terminal-blink': 'blink 1s infinite',
        'terminal-blink-fast': 'blink 0.5s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-fast': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-up-fast': 'slideUp 0.2s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.3s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'scale-out': 'scaleOut 0.2s ease-in',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        bounceSubtle: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'currentColor' },
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Mobile-specific font sizes
        'mobile-xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'mobile-sm': ['0.75rem', { lineHeight: '1rem' }],
        'mobile-base': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      maxWidth: {
        'mobile': '100vw',
        'tablet': '768px',
        'desktop': '1280px',
        'content': '65ch',
        'prose': '75ch',
        'reading': '45ch',
      },
      minHeight: {
        'mobile': '60vh',
        'tablet': '70vh',
        'desktop': '80vh',
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'cinema': '21 / 9',
        'photo': '4 / 3',
        'golden': '1.618 / 1',
      },
      content: {
        'empty': '""',
      },
    },
  },
  plugins: [
    // Custom plugin for responsive utilities
    function({ addUtilities, theme, variants }: any) {
      const mobileFirst = {
        '.text-responsive': {
          fontSize: theme('fontSize.mobile-sm'),
          '@media (min-width: 640px)': {
            fontSize: theme('fontSize.sm'),
          },
          '@media (min-width: 1024px)': {
            fontSize: theme('fontSize.base'),
          },
        },
        '.heading-responsive': {
          fontSize: theme('fontSize.lg'),
          '@media (min-width: 640px)': {
            fontSize: theme('fontSize.xl'),
          },
          '@media (min-width: 1024px)': {
            fontSize: theme('fontSize.2xl'),
          },
        },
        '.padding-responsive': {
          padding: theme('spacing.2'),
          '@media (min-width: 640px)': {
            padding: theme('spacing.4'),
          },
          '@media (min-width: 1024px)': {
            padding: theme('spacing.6'),
          },
        },
        '.gap-responsive': {
          gap: theme('spacing.1'),
          '@media (min-width: 640px)': {
            gap: theme('spacing.2'),
          },
          '@media (min-width: 1024px)': {
            gap: theme('spacing.4'),
          },
        },
        // Additional responsive utilities
        '.container-responsive': {
          maxWidth: '100%',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@media (min-width: 640px)': {
            maxWidth: theme('maxWidth.sm'),
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@media (min-width: 768px)': {
            maxWidth: theme('maxWidth.md'),
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
          '@media (min-width: 1024px)': {
            maxWidth: theme('maxWidth.lg'),
          },
          '@media (min-width: 1280px)': {
            maxWidth: theme('maxWidth.xl'),
          },
          '@media (min-width: 1536px)': {
            maxWidth: theme('maxWidth.2xl'),
          },
        },
      };

      addUtilities(mobileFirst, variants('responsive'));
    },
    
    // Custom plugin for terminal-specific utilities
    function({ addUtilities, theme }: any) {
      const terminalUtilities = {
        '.terminal-cursor': {
          display: 'inline-block',
          width: '0.5rem',
          height: '1.2em',
          backgroundColor: theme('colors.terminal.green'),
          animation: theme('animation.terminal-blink'),
        },
        '.terminal-text': {
          fontFamily: theme('fontFamily.mono'),
          color: theme('colors.terminal.green'),
          backgroundColor: theme('colors.terminal.bg'),
        },
        '.terminal-glow': {
          boxShadow: theme('boxShadow.terminal'),
          textShadow: `0 0 10px ${theme('colors.terminal.green')}`,
        },
        '.shimmer-effect': {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: theme('animation.shimmer'),
          },
        },
      };

      addUtilities(terminalUtilities);
    },
  ],
  // Add custom variants
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'group-focus'],
      textColor: ['active', 'group-focus'],
      borderColor: ['active', 'group-focus'],
      scale: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
      translate: ['active', 'group-hover'],
    },
  },
  // Enable dark mode
  darkMode: 'class',
  // Configure important prefix if needed
  // important: '#app',
  // Configure separator
  separator: ':',
  // Configure prefix
  // prefix: 'tw-',
};

export default config;