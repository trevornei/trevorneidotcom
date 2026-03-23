import Nav from '../components/Nav';
import { getProjects } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function page() {
  const projects = await getProjects();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-white/30">trevornei.com</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-white md:text-5xl">Notes</h1>
          <p className="mt-2 font-mono text-sm text-white/50">Writing</p>
        </div>

        {/* Grid */}
        {!projects.length ? (
          <p className="font-mono text-white/40">Nothing here yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/notes/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
              >
                {/* Cover image */}
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/30">Note</span>
                    <h2 className="mt-1 font-mono text-base font-bold leading-snug text-white">
                      {project.name}
                    </h2>
                  </div>
                  <p className="mt-4 font-mono text-xs text-white/40">By {project.author}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
