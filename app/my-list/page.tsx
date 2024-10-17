"use client"

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const initialMyList = [
  { id: 1, title: 'Sabbath School Lesson', progress: 75, image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 2, title: 'Adventist World Radio', progress: 30, image: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 3, title: 'Hope Channel', progress: 100, image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
];

export default function MyListPage() {
  const [myList, setMyList] = useState(initialMyList);

  const removeFromList = (id: number) => {
    setMyList(myList.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My List</h1>

      {myList.length === 0 ? (
        <p className="text-center text-gray-500">Your list is empty. Start adding content to watch later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myList.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${item.progress}%`}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" onClick={() => removeFromList(item.id)}>Remove</Button>
                    <Button>Continue Watching</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}