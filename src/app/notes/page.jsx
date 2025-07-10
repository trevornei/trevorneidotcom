import Nav from '../components/Nav';
import { getProjects } from '../../../sanity/sanity-utils';
import Image from 'next/image'
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
      <ul> 
        {projects.map((p) => {
          return (
          <li key={p._id} className="text-4xl text-white">
             {p.name}
          </li>
          ) 
        })}
      </ul>
    </>
  )
}
