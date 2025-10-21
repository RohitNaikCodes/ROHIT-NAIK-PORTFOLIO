import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Blending design and technology to build seamless digital worlds
          </h2>
          <p className="text-justify font-light text-xs sm:text-sm md:text-base  ">
            My journey in web development is driven by a passion for building seamless, high-performing digital experiences.With JavaScript at the core, I work with React.js, Node.js, Express, and MongoDB — the MERN stack — to create fast, responsive, and user-focused applications. I also have a growing interest in DevOps, exploring tools and practices that streamline deployment, automate workflows, and enhance overall efficiency. My approach combines technical precision, design awareness, and a continuous drive to innovate, ensuring every project is both impactful and reliable.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        

        <ItemLayout className={"col-span-full"}>
          <div className="w-full relative" style={{minHeight: '120px', width: '100%'}}>
            <Image
              src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
              alt="skills"
              width={1200}
              height={120}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div className="w-full relative" style={{minHeight: '195px'}}>
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=RohitNaikCodes&show_icons=true&locale=en&layout=compact`}
              alt="languages"
              width={495}
              height={195}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <div className="w-full relative" style={{minHeight: '195px'}}>
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=RohitNaikCodes&show_icons=true&locale=en`}
                alt="github-stats"
                width={495}
                height={195}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
