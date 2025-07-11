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
  };
  return (
    <>
      <Nav />

        {projects.map((project) => {
          return (
          <div key={project._id} className="text-4xl text-white"> 
                {project.image && (
                  <Image 
                    src={project.image
                    } 
                    alt={project.name || 'Project image'}
                    width={250}
                    height={250}
                  />
                )}
            {project.name}
          </div>

          ) 
        })}
    </>
  )
}
