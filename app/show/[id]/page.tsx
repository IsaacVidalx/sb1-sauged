import React from 'react';
import ShowDetails from '@/components/ShowDetails';

// This is a mock data object. In a real application, you would fetch this data based on the show ID.
const showData = {
  title: "GREY'S ANATOMY",
  rating: "14+",
  year: 2005,
  seasons: 19,
  genre: "Drama, Medical",
  description: "The medical drama follows the personal and professional lives of the doctors at Seattle's Grey Sloan Memorial Hospital.",
  episodeTitle: "S5:E16 An Honest Mistake",
  episodeDescription: "Derek's confidence is shaken as he faces off with Addison!",
  remainingTime: "34m",
  backgroundImage: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
};

export function generateStaticParams() {
  // In a real application, you would generate this based on your available show IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ShowPage({ params }: { params: { id: string } }) {
  // In a real application, you would use the ID to fetch the correct show data
  console.log('Show ID:', params.id);
  
  return (
    <ShowDetails {...showData} />
  );
}