import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { Blog } from '@/app/Blogs/page';

interface Params {
  params: {
    slug: string;
    
  };
}
const BlogPost = async ({ params }: Params) => {
  const { slug } =  params;

  // Fetch blog data from Sanity based on the slug
  const data: Blog = await client.fetch(
    `*[_type == 'blog' && slug.current == $slug]{
     title,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      date,
      writter,
      "writterImage": writterImage.asset->url
    }[0]`,
    { slug }
  );

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12 bg-white ">
      <div className="bg-white  overflow-hidden">
        <Image
          src={data.imageUrl}
          alt={data.title}
          height={400}
          width={400}
          className="mx-auto object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-black mb-4">
            {data.title}
          </h2>
          <span className="text-xs font-semibold text-gray-700 mb-4">
            Published on {new Date(data.date).toLocaleDateString()}
          </span>
          <p className="text-base md:text-lg font-sans font-light text-gray-800 leading-relaxed mb-4">
            {data.description}
          </p>
          <div className="flex items-center">
            {data.writterImage && (
              <Image
                src={data.writterImage}
                alt={data.writter || 'Writer'}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
            )}
            <span className="text-sm font-medium text-gray-900">
              {data.writter ? `Written by ${data.writter}` : 'Author Unknown'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
