export async function fetchProjectData(projectSlug) {

const nextData = ref(null);
const prevData = ref(null);

  // Fetch the project data
  const { data } = await useSanityQuery(groq`
    *[_type == 'projectType' && slug.current=='${projectSlug}' ] {
      _id,
      'slug' : slug.current,
      title,
      year,
      client,
      url,
    category[] -> {
      _id,
      title
    },
    'imageUrl': cover.asset->url,
    roles[] -> {
      _id,
      title
    },
    summary,
    tech,
    description,
	'next':  *[_type == 'projectType' && _createdAt > ^._createdAt ] | order(_createdAt asc)[0] {
      _id,
	  'slug' : slug.current,
      title,
      year,
    },
	'prev':  *[_type == 'projectType' && _createdAt < ^._createdAt ] | order(_createdAt desc)[0] {
      _id,
	  'slug' : slug.current,
      title,
      year,
    }
    }
  `);
  
  const currentData = data || null;


  return { currentData, nextData, prevData };
}

