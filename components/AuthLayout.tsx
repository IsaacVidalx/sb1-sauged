import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center text-primary-foreground">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to AdventistStream</h2>
          <p className="text-lg">
            Discover and stream Adventist content from around the world. Join our community and
            access a wealth of spiritual resources.
          </p>
        </div>
      </div>
    </div>
  );
}