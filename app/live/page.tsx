"use client"

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

const liveStreams = [
  { id: 1, title: 'Sabbath Service - Central Church', viewers: 1200, thumbnail: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', type: 'Country Worship', country: 'USA' },
  { id: 2, title: 'Bible Study - Hope Channel', viewers: 850, thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', type: 'Global/Regional/Country Event', country: 'Global' },
  { id: 3, title: 'Youth Conference 2023', viewers: 3000, thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', type: 'Global/Regional/Country Event', country: 'Europe' },
  { id: 4, title: 'Adventist World Radio - Live', viewers: 500, thumbnail: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', type: 'Global/Regional/Country Event', country: 'Global' },
];

const countries = ['Global', 'USA', 'Europe', 'Australia', 'Brazil', 'South Africa', 'Philippines'];

export default function LivePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredStreams = liveStreams.filter((stream) =>
    stream.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === '' || stream.type === selectedType) &&
    (selectedCountry === '' || stream.country === selectedCountry)
  );

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Live Streams</h1>

      <div className="mb-8 space-y-4">
        <div>
          <Label htmlFor="streamType">What would you like to see?</Label>
          <Select onValueChange={setSelectedType} value={selectedType}>
            <SelectTrigger id="streamType">
              <SelectValue placeholder="Select stream type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Global/Regional/Country Event">Global/Regional/Country Event</SelectItem>
              <SelectItem value="Country Worship">Country Worship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="country">Select Country</Label>
          <Select onValueChange={setSelectedCountry} value={selectedCountry}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Input
            type="search"
            placeholder="Search live streams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

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
        ) : filteredStreams.length > 0 ? (
          filteredStreams.map((stream) => (
            <Card key={stream.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{stream.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{stream.viewers} viewers</p>
                  <Button>Watch Live</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No live streams found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}