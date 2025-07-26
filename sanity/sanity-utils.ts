// Where all of our get data functions lives!
// We are waiting for data sooooo... lets use async

//Grok Query Pattern: createClient & pass in obje,
//  then create your query with an http verb

import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'm1aaeqzz',
  dataset: 'production',
  apiVersion: '2025-07-08',
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects(): Promise<any[]> {

  return client.fetch(
    groq`*[_type == "note"]{
      _id, 
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
};

export async function getProject(slug: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "note" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            url
          }
        }
      }
    }`,
    { slug: slug }
  )
}
