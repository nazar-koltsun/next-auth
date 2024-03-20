'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Social = () => {
  return (
    <div className="flex justify-center gap-4 w-full">
      <Button className="w-full" variant="outline" size="lg" onClick={() => {}}>
        <FcGoogle size={'20'} />
      </Button>
      <Button className="w-full" variant="outline" size="lg" onClick={() => {}}>
        <FaGithub size={'20'} />
      </Button>
    </div>
  );
};

export default Social;
