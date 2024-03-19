import React from 'react';
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onBtnClick = () => router.push('/auth/login');

  if (mode === 'modal') {
    return <span className="block">Todo: implement Modal</span>;
  }

  return (
    <span className="cursor-pointer block" onClick={onBtnClick}>
      {children}
    </span>
  );
};

export default LoginButton;
