"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Plus, ThumbsUp, Volume2, Info } from 'lucide-react';

interface ShowDetailsProps {
  title: string;
  rating: string;
  year: number;
  seasons: number;
  genre: string;
  description: string;
  episodeTitle: string;
  episodeDescription: string;
  remainingTime: string;
  backgroundImage: string;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({
  title,
  rating,
  year,
  seasons,
  genre,
  description,
  episodeTitle,
  episodeDescription,
  remainingTime,
  backgroundImage,
}) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h1 className="text-6xl font-bold mb-2">{title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span>{rating}</span>
          <span>{year}</span>
          <span>{seasons} Seasons</span>
          <span>{genre}</span>
          <span className="flex items-center">
            <Volume2 className="w-4 h-4 mr-1" />
            CC
          </span>
        </div>
        <p className="mb-4 max-w-2xl">{description}</p>
        <h2 className="text-2xl font-semibold mb-2">{episodeTitle}</h2>
        <p className="mb-4 max-w-2xl">{episodeDescription}</p>
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-1 w-64 bg-gray-600 rounded-full">
            <div className="h-1 bg-white rounded-full" style={{ width: '70%' }}></div>
          </div>
          <span>{remainingTime} remaining</span>
        </div>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            <PlayCircle className="w-5 h-5 mr-2" />
            Continue
          </Button>
          <Button size="lg" variant="secondary">
            Restart
          </Button>
          <Button size="icon" variant="ghost">
            <Plus className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ThumbsUp className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex mt-8 space-x-8">
          <Button variant="link" className="text-white">
            EPISODES
          </Button>
          <Button variant="link" className="text-white">
            SUGGESTED
          </Button>
          <Button variant="link" className="text-white">
            DETAILS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;