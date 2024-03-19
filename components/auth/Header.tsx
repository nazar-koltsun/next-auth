import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
});

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4 p-4">
      <h1 className={cn('text-3xl', poppins.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{title}</p>
    </div>
  );
};

export default Header;
