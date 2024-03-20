import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Header from '@/components/auth/Header';
import Social from '@/components/auth/Social';
import BackButton from '@/components/auth/BackButton';

interface CardWrapperTypes {
  children: React.ReactNode;
  headerTitle: string;
  backBtnTitle: string;
  backBtnHref: string;
  showSocial: boolean;
}

const CardWrapper = ({
  children,
  headerTitle,
  backBtnTitle,
  backBtnHref,
  showSocial,
}: CardWrapperTypes) => {
  return (
    <Card className="w-[400px] max-w-[100%]">
      <CardHeader>
        <Header title={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col space-y-6">
        {showSocial && <Social />}
        <BackButton title={backBtnTitle} href={backBtnHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
