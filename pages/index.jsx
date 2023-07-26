import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar_Black from "../public/Avatar-black.svg";
import Avatar_White from "../public/Avatar-white.svg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    
  }, []);

  return (
    <>
      <Head>
        <title>Hemant ✦ developer, Engineer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            {currentTheme === "dark" ? (
              <Image
                src={Avatar_White}
                alt="hg"
                width="100"
                height="100"
              />
            ) : (
              <Image
                src={Avatar_Black}
                alt="hg"
                width="100"
                height="100"
              />
            )}
            <div className="flex flex-col ml-4">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
                Hemant Gaur
              </h2>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              I am a fourth year student of Computer Science and Engineering at{" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                IIT BHILAI
              </span>{" "}
              who is equiped with Important skills like Programming, Front-End and Back-End Development. I have studied Data Structures and Algorithms, Machine Learning, Natural Language Processing, Computer Networks and Blockchain. I am currently working in a Pune Based StartUp called GrowthCraft where I have successfully designed their website Using NextJs and TailwindCSS.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
