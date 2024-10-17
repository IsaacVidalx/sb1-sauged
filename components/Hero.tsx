import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-hero-image">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to AdventistStream</h1>
        <p className="text-xl mb-8">Discover and stream Adventist content from around the world</p>
        <Button size="lg">Start Watching</Button>
      </div>
    </div>
  );
}