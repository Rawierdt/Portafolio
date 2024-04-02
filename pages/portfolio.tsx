import type { NextPage } from 'next'
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head'

interface Item {
  title: string;
  language: string;
  date: string;
  image: string;
  altText: string;
  githubLink: string;
  description1: string;
  description2: string;
  readMoreLink: string;
}

const Portfolio: NextPage = () => {
  const { t } = useTranslation("index");
  const [data, setData] = useState<Item[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/_pr/projects.json');
      const json: Item[] = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const filteredData = data ? data.filter((item: Item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.language.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }) : [];

  return (
    <>
      <noscript>
        <h1>
          You need to enable JavaScript to run this app.
        </h1>
      </noscript>
      <Head>
        <title>Rawier - Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="./Rawier-icon.png" />
        <meta name="description"
          content="Rawier's Portfolio."></meta>
        <meta property="og:description"
          content="Rawier's Portfolio." />
        <meta property="og:title" content="Rawier - Portfolio" />
        <meta property="og:url" content="https://Rawier.vercel.app/portfolio" />
      </Head>
      <div className='portfolio'>
        <br />
        <div className="flex justify-around hover:justify-evenly">
          <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="../Rawier-icon.png" width="90" height="90"></img>
        </div>
        <br />
        <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">PROJECTS</h1>
        <p className="flex justify-center font-bold text-center text-black-900 dark:text-white">Here are some of my most recent projects and contributions.</p>
        <br />
        <br />
        <div className='max-w-md mx-auto'>
          <div className="relative flex items-center w-full h-12 overflow-hidden rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900">
            <div className="grid w-12 h-full place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Aquí está el input de búsqueda */}
            <input
              className="w-full h-full pr-2 text-sm outline-none peer"
              type="text"
              id="search"
              placeholder=" Search something..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Aquí comienzan los proyectos mostrados en tablas */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredData.map((item: Item, index: number) => (
            <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
                <img className="relative object-cover w-full h-48 overflow-hidden md:h-60" style={{ width: '100%', height: 'auto' }} loading="lazy" src={item.image} alt={item.altText} />
                <div className="p-4">
                  <div>
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                      </svg>
                      <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">{item.title}</span>
                    </a>
                  </div>
                  <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
                    <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>
                    {item.language}
                  </span>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.description1}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.description2}
                  </p>
                  <div className="flex justify-between mt-4">
                    <p className="text-xs text-yellow-500">
                      {item.date}
                    </p>
                    <button data-ripple-light="true" type="button" onClick={() => window.open(item.readMoreLink, '_blank')} className="relative px-4 py-2 overflow-hidden font-medium duration-300 border border-b-4 rounded-md outline-none bg-violet-900 text-violet-400 border-violet-400 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
                      <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        {/* 𝕽♛ */}
      </div>
    </>
  );
};


export default Portfolio;
