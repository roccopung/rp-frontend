export const useRelativeUrl = (url) => {
  const config = useRuntimeConfig()

  return url.replace(config.public.baseUrl, '/')
}
