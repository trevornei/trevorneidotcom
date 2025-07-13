import { getProject, urlFor } from '../../../../sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import bg from '../../../../public/bg.png';
import Nav from '../../components/Nav';

export default async function note({ params }) {
  const slug = params.note
  const note = await getProject(slug) 
  return (
    <>
    <Nav /> 
    <div className="mx-10 items-center content-start flex flex-col content-evenly gap-8 my-10 bg-neutral-950/10 w-auto h-full" key={note._id}>
      <Image
        src={bg}
        alt="Background image for aesthetics."
        width={400}
        height={600}
        className="absolute -z-20 top-[100px] -right-[100px] blur-[50px]"
        objectFit="cover"
      /> 
      <Image 
        src={note.image} 
        alt={note.name}
        width={250}
        height={250}
        objectFit="cover"
        className="rounded-2xl"
      />

      <h1 className="text-4xl text-white">{note.name}</h1>
      <div className="w-full h-[30px] bg-neutral-500/10"></div>
      <div className="text-white text-sky-500 font-semibold">
        <PortableText value={note.content} />    
      </div>
    </div> 
  </>)
}
