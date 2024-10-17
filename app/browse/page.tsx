"use client"

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

const content = [
  { id: 1, title: 'Sabbath School Lesson', category: 'Bible Study', image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 2, title: 'Adventist World Radio', category: 'Sermons', image: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 3, title: 'Hope Channel', category: 'Family', image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 4, title: '3ABN', category: 'Music', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 5, title: 'Amazing Facts', category: 'Prophecy', image: 'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 6, title: 'Adventist Health', category: 'Health', image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
];

const categories = ['All', 'Sermons', 'Bible Study', 'Music', 'Health', 'Family', 'Prophecy'];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const filteredContent = content.filter((item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === 'All' || item.category === activeCategory)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Content</h1>
      
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </div>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array(6).fill(0).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Skeleton className="w-full h-48" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                  <Button>Watch Now</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No content found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}