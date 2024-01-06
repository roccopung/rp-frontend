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
      collaborators,
      url,
      video,
      gallery[] {
        images[] {
            'itemUrl': asset->url,
            crop,
            hotspot
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
	    'next':  *[_type == 'projectType' && orderRank > ^.orderRank] | order(orderRank asc)[0] {
        _id,
	      'slug' : slug.current,
        title,
        year,
      },
	    'prev':  *[_type == 'projectType' && orderRank < ^.orderRank] | order(orderRank desc)[0] {
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
