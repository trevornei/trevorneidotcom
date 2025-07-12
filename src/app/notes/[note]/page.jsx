import { getProject, urlFor } from '../../../../sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function note({ params }) {
  const slug = params.note
  const note = await getProject(slug) 
  return (
    <div key={note._id}>
      <Image 
        src={note.image} 
        alt={note.name}
        width={250}
        height={250}
        objectFit="cover"
        className="rounded-2xl"
      />

      <h1 className="text-4xl text-white">{note.name}</h1>
      <div className="text-white text-sky-500 font-semibold">
        <PortableText value={note.content} />    
      </div>
    </div> 
  )
}
