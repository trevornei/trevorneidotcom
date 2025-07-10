import Nav from '../components/Nav';
import { getProjects } from '../../../sanity/sanity-utils';

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
          <li key={p._id} className="bg-red-500 w-[400px] h-[400px] text-white text-bold text-4xl">
             {p.name}
          </li>
          ) 
        })}
      </ul>
    </>
  )
}
