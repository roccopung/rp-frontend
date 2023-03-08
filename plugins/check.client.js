export default defineNuxtPlugin((nuxtApp) => {
  onNuxtReady(() => {
    document.body.classList.add("loaded")
  })
})
