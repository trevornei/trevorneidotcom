import { getProject, urlFor } from '../../../../sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import bg from '../../../../public/bg.png';
import Nav from '../../components/Nav';

export default async function note({ params }) {
  const {note: slug } = await params 
  const note = await getProject(slug) 
  return (
    <>
    <Nav /> 
    <div className="mx-10 md:mx-20 lg:mx-28 xl:mx-32 items-center content-start flex flex-col content-evenly gap-8 my-10 bg-neutral-950/10 w-auto h-full" key={note._id}>
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

      <div className="text-white font-semibold">
        
      <h1 className="text-2xl sm:text-3xl md:text-4xl pb-6 text-tp">{note.name}</h1>
      <PortableText 
          value={note.content}
          components={{
            block: {
              normal: ({children}) => (
                <p className="mb-4 indent-4 text-sm text-white/90">{children}</p>
              ),
            },
            list: {
              bullet: ({children}) => (
                <ul className="list-disc ">{children}</ul>
              ),
            },
            listItem: {
              bullet: ({children}) => ( 
                <li className="list-disc marker:text-tp text-white">{children}</li>
              ),
            },
            types: {
              image: ({ value }) => {
                return (
                  <div className="flex flex-col border-2 border-tp items-center bg-tp/10 justify-center my-6 mx-auto">
                    <Image 
                      src={urlFor(value).url()}
                      alt={value.alt || "Image"}
                      width={400}
                      height={400}
                      className=""
                    />
                  </div>
                )
              },
              code: ({ value }) => {
                return(
                  <div>
                    <pre className>
                      <code>{value.code}</code>
                    </pre>
                  </div>
                )
             },
            },
          }}
        />    
      </div>
    </div> 
  </>)
}
