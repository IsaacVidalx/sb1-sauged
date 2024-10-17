"use client"

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

const featuredContent = [
  { id: 1, title: 'Sabbath School Lesson', image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 2, title: 'Adventist World Radio', image: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 3, title: 'Hope Channel', image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 4, title: '3ABN', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 5, title: 'Amazing Facts', image: 'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
];

export default function FeaturedContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Featured Content</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {isLoading ? (
            Array(5).fill(0).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Skeleton className="w-full h-full rounded-md" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          ) : (
            featuredContent.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover rounded-md" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 rounded-md">
                        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}