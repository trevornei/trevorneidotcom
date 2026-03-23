import { getProject, urlFor } from '../../../../sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Nav from '../../components/Nav';

export default async function note({ params }) {
  const { note: slug } = await params;
  const note = await getProject(slug);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-16" key={note._id}>

        {/* Cover image */}
        {note.image && (
          <div className="mb-8 flex justify-center">
            <Image
              src={note.image}
              alt={note.name}
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="mb-10 text-center font-mono text-3xl font-bold text-white md:text-4xl">
          {note.name}
        </h1>

        {/* Body */}
        <div className="w-full overflow-hidden text-left text-white">
          <PortableText
            value={note.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="mb-4 break-words font-mono text-sm leading-relaxed text-white/80">{children}</p>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li className="break-words font-mono text-sm text-white/80">{children}</li>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="my-8 flex justify-center">
                    <Image
                      src={urlFor(value).url()}
                      alt={value.alt || "Image"}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                  </div>
                ),
                code: ({ value }) => (
                  <div className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-neutral-900/80 p-5">
                    <pre data-language={value.language}>
                      <code className="font-mono text-sm text-white/90">{value.code}</code>
                    </pre>
                  </div>
                ),
              },
            }}
          />
        </div>
      </main>
    </>
  );
}
