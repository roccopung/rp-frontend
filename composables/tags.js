export async function fetchTagsData() {

    // Fetch the project data
    const { data } = await useSanityQuery(groq`
    *[_type == "tags"] {
        _id,
        title
      }
    `);
  
    const tagsData = data || null;
  
    return { tagsData };
  }
  