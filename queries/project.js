export function fetchProjectData(projectSlug) {
  const currentData = ref(null);
  const nextData = ref(null);
  const prevData = ref(null);

  // Fetch the project data
  const { data } = useSanityQuery(groq`
    *[_type == 'projectType' && slug.current=='${projectSlug}' ] {
      _id,
      'slug' : slug.current,
      title,
      year,
      client,
      // ... other fields
      'imageUrl': cover.asset->url,
      roles[] -> {
        _id,
        title
      },
      summary,
      tech,
      description,
      'next':  *[_type == 'projectType' && _id > ^._id ] | order(orderRank)[0] {
        _id,
        'slug' : slug.current,
        title,
        year,
      },
      'prev':  *[_type == 'projectType' && _id < ^._id ] | order(orderRank)[0] {
        _id,
        'slug' : slug.current,
        title,
        year,
      }
    }
  `);

  // Set data for current, next, and previous projects
  currentData.value = data[0] || null;
  nextData.value = data[0]?.next || null;
  prevData.value = data[0]?.prev || null;

  return { currentData, nextData, prevData };
}

export function nextPage(router, nextData) {
  if (nextData) {
    router.push({ name: '[slug]', params: { slug: nextData.slug } });
  }
  // Handle case when there is no next project
}