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
    <div className="mx-10 md:mx-20 lg:mx-28 xl:mx-32 w-3/4 items-center content-start flex flex-col flex-wrap content-evenly gap-8 my-10 bg-neutral-950/10 h-full" key={note._id}>
      <Image 
        src={note.image} 
        alt={note.name}
        width={250}
        height={250}
        objectFit="cover"
        className="rounded-2xl"
      />

      <div className="text-white font-semibold w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-hidden break-words">
        
      <h1 className="font-size-5xl leading-tight pb-4 sm:pb-5 md:pb-6 text-tp text-center sm:text-left break-words overflow-wrap-anywhere">{note.name}</h1>
      <PortableText
          className="flex flex-col flex-wrap"
          value={note.content}
          components={{
            block: {
              normal: ({children}) => (
                <p className="mb-3 font-mono sm:mb-4 md:mb-5 indent-2 sm:indent-4 md:indent-6 font-size-base text-white/90 leading-relaxed break-words overflow-wrap-anywhere">{children}</p>
              ),
            },
            list: {
              bullet: ({children}) => (
                <ul className="list-disc ml-4 sm:ml-6 md:ml-8 space-y-1 sm:space-y-2">{children}</ul>
              ),
            },
            listItem: {
              bullet: ({children}) => ( 
                <li className="list-disc marker:text-tp text-white font-size-base break-words overflow-wrap-anywhere">{children}</li>
              ),
            },
            types: {
              image: ({ value }) => {
                return (
                  <div className="flex flex-col border-2 border-tp items-center bg-tp/10 justify-center my-4 sm:my-6 md:my-8 mx-auto rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <Image 
                      src={urlFor(value).url()}
                      alt={value.alt || "Image"}
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-md sm:rounded-lg object-cover"
                    />
                  </div>
                )
              },
              code: ({ value }) => {
                const {language} = value.language;
                return(
                  <div className="border-2 border-tp rounded-md sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 my-4 sm:my-6 md:my-8 overflow-x-auto bg-neutral-900/50 backdrop-blur-sm max-w-full">
                    <pre data-language={value.language} className="font-size-sm overflow-x-auto whitespace-pre-wrap break-words max-w-full">
                      <code className="text-white/95 break-words">{value.code}</code>
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
