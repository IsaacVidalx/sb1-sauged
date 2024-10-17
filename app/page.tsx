import Hero from '@/components/Hero';
import FeaturedContent from '@/components/FeaturedContent';
import Categories from '@/components/Categories';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedContent />
      <Categories />
    </div>
  );
}