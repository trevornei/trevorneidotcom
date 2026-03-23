import Nav from '../components/Nav';
import { getProjects, urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import bgImg from '../../../public/images/decorative/ma_cherry_image2.webp';

export default async function page() {
  const projects = await getProjects();
  console.log(projects);
  if (!projects.length) {
    return (
      <p className="text-4xl text-white">No data was found</p>
    ) 
  };
  return (
    <>
      <Nav />
      <div className="m-6 md:m-8 lg:m-10 flex flex-col">  
      <div className="m-6 md:m-8 lg:m-10 text-white">
        <h1 className="text-tp font-size-4xl">ALL CAPS</h1>
        <h3 className="font-size-2xl">Trying to find Bobby Tables</h3>
      </div>
      {projects.map((project) => {
          return (
            <div key={project._id} className="bg-green-300/10 text-white border-[1px] border-tp/20 rounded-md overflow-clip p-8 m-4 lg:m-6 xl:m-10">
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={450}
                    height={450}
                    className="rounded-md"
                  />
                )}
            
            <div>
          
          <Link id="link" className="z-50 mx-auto text-tp font-size-lg my-2 w-10 h-6 px-[10px] py-[5px]" href={`/notes/${project.slug}`}>
            
            <h1 className="font-size-xl font-mono">{project.name}</h1>
            <h4 className="font-size-sm text-ts font-mono">By: {project.author}</h4>
            <h4 className="border-[.5px] font-mono rounded-md border-white/50 shadow-xl shadow-sky-500/20 w-16 px-10 flex items-center justify-center text-white/40 bg-ts/40 font-size-xs">NOTE</h4>
          </Link>
          </div>
          <div>
          </div>
          </div>
          )
      })}

    </div>
    </>
  )
}
