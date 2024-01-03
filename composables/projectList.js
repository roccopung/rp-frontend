export async function fetchProjectType() {

    // Fetch the project data
    const { data } = await useSanityQuery(groq`
    *[_type == "projectType"]|order(orderRank) {
        title, year, cover, roles[] -> {
          _id,
          title
        }, category[] -> {
          _id,
          title
        }, 
        "imageUrl": cover.asset->url,
        "slug": slug.current
      }
    `);
  
    const projectData = data || null;
  
    return { projectData };
  }
  