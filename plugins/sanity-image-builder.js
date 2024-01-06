import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)
  function urlFor(source) {
    return builder.image(source).crop("focalpoint").fit("crop").auto("format")
  }
  return {
    provide: { urlFor }
  }
})