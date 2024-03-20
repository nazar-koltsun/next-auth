import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BackButtonProps {
  title: string;
  href: string;
}

const BackButton = ({ title, href }: BackButtonProps) => {
  return (
    <Button variant='link' asChild>
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default BackButton;
