import Nav from '../components/Nav';
import { getProjects, urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import bgImg from '../../../public/assets/images/ma_cherry/image_2.png';
import { Suspense } from 'react';

export default async function page() {
  const projects = await getProjects();
  if (!projects.length) {
    return (
      <p className="text-4xl text-white">No data was found</p>
    ) 
  };
  return (
    <>
      <Nav />
      <div>
        <Image 
          src={bgImg} 
          alt='background blured image.'
          width={750}
          height={750}
          objectFit="cover"
          className="absolute inset-0 -z-10 blur-[200px]"
        />
      </div>
      <div className="m-6 md:m-8 lg:m-10 flex flex-col">  
      <Suspense fallback={<Loading />}>
      {projects.map((project) => {
          return (
          <div key={project._id} className="bg-neutral-400/20 hover:bg-neutral-400/30 text-2xl md:text-3xl lg:text-4xl xl:text-l text-white border-[.5px] border-tp rounded-xl rounded-r-3xl overflow-clip p-8 m-4 lg:m-6 xl:m-10"> 
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={250}
                    height={250}
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                )}
            {project.name}
            <Link className="mx-auto my-2 w-10 h-6 bg-neutral-100/20 p-[2px] rounded-3xl" href={`/notes/${project.slug}`}>
             Click 💥 Here
            </Link>
          </div>
          )

        })}

    </Suspense>
    </div>
    </>
  )
}

function Loading () {
  <>
    return <div className="bg-neutral-20 w-[100px] h-[25px] md:w-[200px] md:h-[50px]  lg:w-[400px] lg:h-[100px]">
             <p className="text-4xl">... LOADING ...</p>
           </div>
  </>
}
