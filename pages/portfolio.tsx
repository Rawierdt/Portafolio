import type { NextPage } from 'next'
import Link from 'next/link';
import { ReactElement } from 'react'
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head'

const Portfolio: NextPage = (): ReactElement => {
  const { t } = useTranslation("index");
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
      {/* No consigo que se traduzca */}
      <br />
      <div className="flex justify-around hover:justify-evenly">
        <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="../Rawier-icon.png" width="90" height="90"></img>
      </div>
      <br />
      <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">PROJECTS</h1>
      <p className="flex justify-center font-bold text-center text-black-900 dark:text-white">Here are some of my most recent projects and contributions.</p>
      <br />
      <br />

{/* Aqui comienzan los proyectos mostrados en tablas */}

<div className="flex flex-wrap justify-center gap-6">
  {/* Primer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0 ">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/5rGvvFy/anayansi.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Anayansi" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Anayansi</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟡🔵 Python
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Create and Cracker Hashes written in python.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          This tool written in python will allow you to create hashes or break them using a dictionary of words such as rockyou.txt. Just pass the path where you will have your worldlist or dictionary and then specify the type of hash, MD5, SHA1, SHA256, SHA384, SHA512 and just paste the hash and wait.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Apr 01, 2024
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/anayansi', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-green-400 duration-300 bg-green-900 border border-b-4 border-green-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Segundo elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0 ">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/bKNbrtP/portfolio.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Portafolio" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Rawier's Portfolio</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🔵 React | 🔵 Typescript
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          This is my portfolio.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          This is my portfolio, it was written in Typescript with Tailwind using Nextjs framework, this portfolio is constantly updated. I hope you like it 🔥, if you have any questions feel free to ask me or contact.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Mar 28, 2024
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-green-400 duration-300 bg-green-900 border border-b-4 border-green-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Tercer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
      <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/rxyZFWL/metacrw.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/metacrawler" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Metacrawler 2</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
              🔵 Electron
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Metadata cleaner.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Metadata eraser, copy and other, with beauty visuals and effects. Project made in Electron, HTML 5 and CSS, compatible with Windows, MacOS and Linux, mmmmm, I don't know what else to put here xd.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Mar 27, 2024
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/metacrawler', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-green-400 duration-300 bg-green-900 border border-b-4 border-green-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>

<br />
{/* Otra linea de  tablas */}
<div className="flex flex-wrap justify-center gap-6">
  {/* Primer elemento */}
    <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/L9rfvK0/nexdrakpage.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://nexdrak.surge.sh" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">NexDrak - Artist Landing Page</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🔵 React
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          An artist landing page for NexDrak.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        In there you can find information about his works. Project made in React, hosting on Surge, the project is still in development but you can check it out for now, the link is below.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Ago 18, 2023
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://nexdrak.surge.sh', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-teal-400 duration-300 bg-teal-900 border border-b-4 border-teal-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-teal-400 shadow-teal-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Segundo elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0 ">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/ykRkdFg/tidex.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Tidex" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Tidex Ransomware</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟡🔵 Python | ⚪ Linux
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Small example of Linux Ransomware.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Simple little Ransomware, only works to encrypt files in the directory path Desktop and subdirectories, At the moment it can only be executed on Linux machines. it lacks decryption function, the KEY is: hkpykiiqftupr3okl04azj
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Jan 30, 2023
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/tidex', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-teal-400 duration-300 bg-teal-900 border border-b-4 border-teal-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-teal-400 shadow-teal-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Tercer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
      <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/pfsZcLx/alopolisia.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/alopolisia" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Alo Polisia Community</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            🟢 Administration | ⚪ Linux | 🟡 SQL
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Alo Polisia was a community was created to help anyone...
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Who felt alone during the 2020 pandemic, used to play on a minecraft survival, creative or another game server that reached 100 players per month, all this thanks to the help of many people, I will be eternally grateful to them.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Undefined
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/404', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-teal-400 duration-300 bg-teal-900 border border-b-4 border-teal-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-teal-400 shadow-teal-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>

<br />
{/* Continuan los proyectos mostrados en tablas */}
<div className="flex flex-wrap justify-center gap-6">
  {/* Primer elemento */}
    <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/VWPkG3D/Sislog.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Sislog" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">SisLog</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟡🔵 Python
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Forensic and audit tool to generate logs.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Windows 8/10/11 forensic tool to generate logs about installed programs, NetBios connections, ARP cache, DNS, processes, network, WIFI, services, computer modifications, scheduled tasks, mapped drives and more.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Apr 30, 2023
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://github.com/Rawierdt/Sislog', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-blue-400 duration-300 bg-blue-900 border border-b-4 border-blue-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Segundo elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0 ">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/DG5qkTs/metacrawler2.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Metacrawler-IPTracker" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Metacrawler && IPTracker</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟡🔵 Python | 🟡 SQL
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          2 programs written on python for several purposes.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Metacrawler: Erases metadata in any image or photo file., IPTracker: Finds the location of an IP address provided by URL (optional) and finds its open ports as well as generates malicious IP address report.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Apr 23, 2023
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/meta-ip', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-blue-400 duration-300 bg-blue-900 border border-b-4 border-blue-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Tercer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
      <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/8rBdqmZ/Espejitoo.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/espejito" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Espejito, Espejito...</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟡 Javascript
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Small application that displays...
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          This application shows all the information that a web page can obtain; View your data, if you are using VPN it will show another address, if you are using Brave or another browser it may block tracking.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Dec 28, 2021
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawierdt.github.io/espejito/', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium text-blue-400 duration-300 bg-blue-900 border border-b-4 border-blue-400 rounded-md outline-none hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>

<br />
{/* Ultima de proyectos */}
<div className="flex flex-wrap justify-center gap-6">
  {/* Primer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
      <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/hxG12bT/Cler.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://rawierdt.github.io/Cler-page/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Cler Multiprospose Discord Bot</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🔵 Typescript | 🟢 Nodejs | 🟡 SQL
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Multiprospose Discord Bot v12.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Spanish discord bot, code in node.js / discord.js, but it is easy to learn each command, Written in Typescript, Dotenv, Discord.js, API's, and more; Consult details on the Cler's web page.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Undefined
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/cler10', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium duration-300 border border-b-4 rounded-md outline-none bg-violet-900 text-violet-400 border-violet-400 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Segundo elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/7VGj1mR/chilltifyel.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/Chilltify" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">Chilltify (Spotify Clone)</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🔵 Electron
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Music aplication, for Diana Sessions.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Lofi music application made in electron, based on "Diana Sessions" from Riot Games Music, Spotify clone, built in Electron (HTML 5, Javascript, CSS), this aplication works on Windows, Linux and Mac.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Undefined
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/chilltify', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium duration-300 border border-b-4 rounded-md outline-none bg-violet-900 text-violet-400 border-violet-400 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* Tercer elemento */}
  <div className="w-full lg:w-[30%] max-w-[400px] mx-2 mb-4 lg:mb-0 ">
    <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <img className="relative object-cover w-full overflow-hidden h-60 md:h-72" style={{ width: '400px', height: 'auto' }} loading="lazy" src="https://i.ibb.co/XkJ95Wm/alumnos-crud.png" alt="People working together at a desk" />
      <div className="p-4">
      <div>
        <a href="https://github.com/Rawierdt/java-crud-alumnos/tree/main" target="_blank" rel="noopener noreferrer" className="inline-block">
          <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
          <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">JAVA CRUD Alumnos</span>
        </a>
      </div>
        <span className="block mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
            <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
            </svg>
            🟠 Java | 🟡 SQL
        </span>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Java CRUD, using NetBeans and MySQL
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Java CRUD (CREATE, READ, UPDATE, DELETE) for the faculty of computer science UPIICSA for student registration or delete, also you can put filter options, this project works with MySQL database. Using NetBeans.
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-xs text-yellow-500">
            Undefined
          </p>
          <button data-ripple-light="true" type="button" onClick={() => window.open('https://rawier.vercel.app/blog/java-crud', '_blank')} className="relative px-4 py-2 overflow-hidden font-medium duration-300 border border-b-4 rounded-md outline-none bg-violet-900 text-violet-400 border-violet-400 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
          <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* 𝕽♛ */}
    </div>
    </>
  );
};


export default Portfolio;