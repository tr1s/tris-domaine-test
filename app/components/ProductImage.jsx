import {Image} from '@shopify/hydrogen';

/**
 * @param {{
 *   image: ProductVariantFragment['image'];
 *   isOnSale: boolean;
 * }}
 */
export function ProductImage({image, isOnSale}) {
  if (!image) {
    return <div className="product-image" />;
  }
  return (
    <div className="product-image border border-gray-300 rounded-[20px] max-w-[500px] mb-5 relative">
      <Image
        alt={image.altText || 'Product Image'}
        aspectRatio="1/1"
        data={image}
        key={image.id}
        sizes="(min-width: 45em) 50vw, 100vw"
      />

      {isOnSale && (
        <div className="absolute top-5 left-5">
          <span className="inline-block px-4 py-1 bg-white text-red-600 border border-red-600 rounded-[25.61px] font-medium">
            On Sale!
          </span>
        </div>
      )}
    </div>
  );
}

/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
