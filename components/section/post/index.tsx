import React from "react";
import Link from "next/link";
import { PostType } from "../../../models";
import useTranslation from "next-translate/useTranslation";

export default function Post({ post }: PostType) {
  const { t } = useTranslation("index");
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="w-full px-4 my-4 md:px-6 lg:px-8 lg:w-full">
        <article className="flex flex-col border-2 rounded-lg shadow-lg md:flex-row dark:hover:border-violet-700 hover:border-black dark:bg-slate-800">
          <a href={`/blog/${post.slug}`} className="w-full md:w-1/3">
            <img
              alt={post.frontmatter.title}
              className="block object-cover w-full h-48" // Adjusted height for a more rectangular shape
              src={post.frontmatter.cover_image}
            />
          </a>
          <div className="flex flex-col justify-between w-full p-4 md:w-2/3">
            <header className="leading-tight">
              <h1 className="text-2xl font-bold">
                <a href={`/blog/${post.slug}`} className="hover:underline dark:text-white">
                  {post.frontmatter.title}
                </a>
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {post.frontmatter.excerpt} {/* Assuming you have an excerpt or short description */}
              </p>
              <div className="flex items-center mt-2">
                <button title="Badge" className="flex items-center px-2 py-1 mr-2 text-sm font-semibold border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  {post.frontmatter.tags1}
                </button>
                <button title="Badge" className="flex items-center px-2 py-1 text-sm font-semibold border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  {post.frontmatter.tags2}
                </button>
              </div>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {post.frontmatter.date}
              </p>
            </header>
          </div>
        </article>
      </div>
    </Link>
  );
}
