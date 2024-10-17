"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const categories = [
  { id: 1, name: 'Sermons', icon: '🎙️' },
  { id: 2, name: 'Bible Study', icon: '📖' },
  { id: 3, name: 'Music', icon: '🎵' },
  { id: 4, name: 'Health', icon: '🍎' },
  { id: 5, name: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 6, name: 'Prophecy', icon: '🔮' },
];

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {isLoading ? (
          Array(6).fill(0).map((_, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Skeleton className="h-16 w-16 rounded-full mb-2" />
                <Skeleton className="h-4 w-24" />
              </CardContent>
            </Card>
          ))
        ) : (
          categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-4xl mb-2">{category.icon}</span>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}