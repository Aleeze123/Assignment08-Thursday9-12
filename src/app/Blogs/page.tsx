import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
  date: string;
  writter: string;
  writterImage: string;
}
export default async function blog() {
  const data: Blog[] = await client.fetch(`*[_type == 'blog'] {
    heading,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url,
   date,
      writter,
      "writterImage": writterImage.asset->url
  }`);
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white mt-16">
      <div className="flex items-center justify-center mb-8">
        <div className="w-1/4 border-b-2 border-gray-300"></div>
        <h1 className="text-4xl font-bold mx-4 text-center">BLOGS</h1>
        <div className="w-1/4 border-b-2 border-gray-300"></div>
      </div>
      <p className="text-center mb-8 text-gray-700">Recent travel blog posts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105 hover:shadow-xl">
              <Image
                className="w-full h-48 object-cover"
                src={blog.imageUrl || "/About.png"} 
                alt={blog.heading}
                width={400}
                height={300}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.heading}</h2>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <span className="text-xs font-semibold text-gray-500 mb-2 block">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
                <div className="flex items-center mt-4">
                  {blog.writterImage && (
                    <Image
                      src={blog.writterImage}
                      alt={blog.writter || "Writer"}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-900">
                    {blog.writter ? `Written by ${blog.writter}` : "Author Unknown"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

