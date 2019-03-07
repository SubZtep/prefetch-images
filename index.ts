//const prefetchImages = (urls: string[]) => {
const prefetchImages = () => {
  // Client side only
  if (typeof window === "undefined") return

  const assets = {
    logoGif: "https://media.giphy.com/media/sPuDbEFCsoN32/giphy.gif",
    blogGif: "https://media.giphy.com/media/3wDD0Khwova4o/giphy.gif",
    tempGif: "https://media.giphy.com/media/9EWRVH2H98z6g/giphy.gif",
    avatar: "https://s.gravatar.com/avatar/fa1e8161f961b4abd7cc7f61aa486021?s=120"
  }
  const checkImage = path =>
    new Promise(resolve => {
      let img = new Image()
      img.onload = () => resolve({ path, status: "ok" })
      img.onerror = () => resolve({ path, status: "error" })
      img.src = path
    })
  const loadImgs = (...paths) => Promise.all(paths.map(checkImage))
  loadImgs(...Object.values(assets)).then(() => {
    this.$router.push("/home")
  })
}

export default prefetchImages
