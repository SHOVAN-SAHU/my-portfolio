import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import TerminalLayout from '@/components/TerminalLayout';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Backend Developer | Terminal Portfolio',
  description: 'Full-stack developer specializing in backend development with Node.js, Express.js, and MongoDB.',
  keywords: ['backend developer', 'nodejs', 'express', 'mongodb', 'mern stack'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00ff41',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono">
        <TerminalLayout>
          {children}
        </TerminalLayout>
      </body>
    </html>
  );
}