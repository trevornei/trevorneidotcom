// Where all of our get data functions lives!
// We are waiting for data sooooo... lets use async

//Grok Query Pattern: createClient & pass in obje,
//  then create your query with an http verb

import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
  projectId: 'm1aaeqzz',
  dataset: 'production',
  apiVersion: '2025-07-08',
  useCdn: true, // Use CDN for faster content delivery
  
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset,
      url,
      content
    }`
  )
};
