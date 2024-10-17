import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 1, name: 'Sermons', icon: '🎙️' },
  { id: 2, name: 'Bible Study', icon: '📖' },
  { id: 3, name: 'Music', icon: '🎵' },
  { id: 4, name: 'Health', icon: '🍎' },
  { id: 5, name: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 6, name: 'Prophecy', icon: '🔮' },
];

const content = [
  { id: 1, title: 'Sabbath School Lesson', category: 'Bible Study', image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 2, title: 'Adventist World Radio', category: 'Sermons', image: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 3, title: 'Hope Channel', category: 'Family', image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 4, title: '3ABN', category: 'Music', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 5, title: 'Amazing Facts', category: 'Prophecy', image: 'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
  { id: 6, title: 'Adventist Health', category: 'Health', image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
];

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = parseInt(params.id);
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  const categoryContent = content.filter(item => item.category === category.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.icon} {category.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryContent.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <Button>Watch Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}