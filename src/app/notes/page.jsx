import Nav from '../components/Nav';
import { getProjects, urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import bgImg from '../../../public/assets/images/ma_cherry/image_2.png';

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
      <div className="text-white text-4xl">
        <h1 className="text-tp">ALL CAPS</h1>
        <h3>Trying to find Bobby Tables -__-</h3>
      </div>
      {projects.map((project) => {
          return (
            <div key={project._id} className="bg-transparent hover:bg-sky-400/10 text-2xl md:text-3xl lg:text-4xl xl:text-l text-white border-[1px] border-tp/20 rounded-md overflow-clip p-8 m-4 lg:m-6 xl:m-10"> 
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={250}
                    height={250}
                    className="rounded-md"
                  />
                )}
          <div>
          
          <Link id="link" className="z-50 mx-auto text-tp text-lg my-2 w-10 h-6 px-[10px] py-[5px]" href={`/notes/${project.slug}`}>
            <h1>{project.name}</h1>
            <h4 className="border-[.5px] rounded-full border-white w-20 flex items-center justify-center ">NOTE</h4>
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
