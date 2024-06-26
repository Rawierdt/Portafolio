import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";

/**
 * @description            About Section
 * @returns {ReactElement} The about section which contains most of the information
 */

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="container px-4 mx-auto">
      <noscript>
        <div>
          <h1>You need to enable JavaScript to run this app.</h1>
        </div>
      </noscript>
      <div className="flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-black-900 lg:text-5xl dark:text-white">
            Alejandro Aguilar
          </h1>
          {/* <h3 className="text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">
            {t("job")}
          </h3> */}
          <h2 className="text-2xl font-bold lg:text-3xl">
            <span className="text-transparent bg-gradient-to-r from-zinc-800 to-slate-400 dark:from-slate-200 dark:to-zinc-600 bg-clip-text">
              {t("job")}
            </span>
          </h2>
          <div className="flex items-center justify-center mt-2 space-x-2 md:justify-center lg:justify-start xsm:justify-center sm:justify-center">
            <a href={t("resume-link")} target={"_blank"}>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
              >
                <span className="animate-spin inline-block w-2 h-2 border-[2px] border-current border-t-transparent rounded-full mr-2"></span>
                <span>{t("resume")}</span>
              </button>
            </a>
          </div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 select-none">{t("about-me")}</p>
          </div>
        </div>
        <div className="flex-shrink-0 mb-10 pointer-events-none focus:pointer-events-auto lg:mt-12 lg:px-4" draggable="false">
          <Image
            src={config.github.url}
            priority={true}
            alt="Profile"
            className="rounded-full"
            width="250"
            height="250"            
          />
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-2 md:justify-center lg:justify-start xsm:justify-center sm:justify-center">
  <Link href={"/skills"}>
    <button
      type="button"
      className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
    >
      <span>{t("button_skills")}</span>
    </button>
  </Link>
  <Link href={"/blog"}>
    <button
      type="button"
      className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
    >
      <span>{t("button_blog")}</span>
    </button>
  </Link>
  <Link href={"/contact"}>
    <button
      type="button"
      className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
    >
      <span>{t("me")}</span>
    </button>
  </Link>
</div>

    </div>
  );
};

export default About;
