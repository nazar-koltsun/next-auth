'use client';

import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/LoginButton';

import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl	text-white font-bold', poppins.className)}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
