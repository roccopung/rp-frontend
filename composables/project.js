export async function fetchProjectData(inputSlug) {
  const nextData = ref(null);
  const prevData = ref(null);

  // Fetch the project data
  const { data } = await useSanityQuery(
    groq`
    *[_type == 'projectType' && slug.current==$projectSlug ][0] {
      _id,
      'slug' : slug.current,
      title,
      year,
      client,
      url,
      video,
      gallery[] {
        images[] {
            'itemUrl': asset->url
        }
      },
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
    pageBuilder[],
	'next':  *[_type == 'projectType' && _id > ^._id ] | order(_id asc)[0] {
      _id,
	  'slug' : slug.current,
      title,
      year,
    },
	'prev':  *[_type == 'projectType' && _id < ^._id ] | order(_id desc)[0] {
      _id,
	  'slug' : slug.current,
      title,
      year,
    }
    }
  `,
    {
      projectSlug: inputSlug,
    }
  );

  const currentData = data || null;

  return { currentData, nextData, prevData };
}
