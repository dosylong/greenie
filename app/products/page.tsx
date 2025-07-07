import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';

export default async function ProductsPage() {
  // Sample data for now
  const products: Product[] = [
    {
      id: '1',
      name: 'Ceremonial Matcha',
      price: 29.99,
      imageUrl:
        'https://thaphaco.com.vn/wp-content/uploads/2025/06/matcha-latte-2.jpg',
      description: 'Premium ceremonial grade matcha.',
      slug: 'ceremonial-matcha',
    },
    {
      id: '2',
      name: 'Everyday Matcha',
      price: 19.99,
      imageUrl:
        'https://thaphaco.com.vn/wp-content/uploads/2025/06/matcha-latte-2.jpg',
      description: 'Perfect for daily matcha lattes.',
      slug: 'everyday-matcha',
    },
  ];

  return (
    <main className='max-w-5xl mx-auto py-8 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Our Matcha Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
