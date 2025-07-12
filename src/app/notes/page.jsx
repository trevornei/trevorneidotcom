import Nav from '../components/Nav';
import { getProjects, urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function page() {
  const projects = await getProjects();
  if (!projects.length) {
    return (
      <p className="text-4xl text-white">No data was found</p>
    ) 
    if (projects) {
      return (
          <h1 className="text-4xl font-bold text-red-500">${projects}</h1>)
    }
  };
  return (
    <>
      <Nav />

        {projects.map((project) => {
          return (
          <div key={project._id} className="text-4xl text-white border-2 border-white/50 p-8"> 
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={250}
                    height={250}
                    objectFit="cover"
                  />
                )}
            {project.name}
          </div>

          ) 
        })}
    </>
  )
}
