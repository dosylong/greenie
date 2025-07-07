'use client';

import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export function ProductCard({
  name,
  price,
  imageUrl,
  description,
}: ProductCardProps) {
  return (
    <div className='border rounded-lg shadow-sm p-4 bg-white flex flex-col items-center max-w-xs'>
      <Image
        width={128}
        height={128}
        src={imageUrl}
        alt={name}
        className='w-32 h-32 object-cover rounded mb-4'
      />
      <h3 className='text-lg font-semibold mb-2'>{name}</h3>
      <p className='text-green-700 font-bold mb-2'>${price.toFixed(2)}</p>
      {description && (
        <p className='text-gray-600 text-sm mb-2 text-center'>{description}</p>
      )}
      <button className='mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>
        Add to Cart
      </button>
    </div>
  );
}
