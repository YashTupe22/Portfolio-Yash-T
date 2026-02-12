import './globals.css';
import { Inter } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Your Name',
  description: 'Modern portfolio showcasing my projects, skills, and experience',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServiceWorkerRegistration />
        <div className="animated-bg"></div>
        {children}
      </body>
    </html>
  );
}
