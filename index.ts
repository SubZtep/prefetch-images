const checkImage = (path: string) =>
  new Promise((resolve, reject) => {
    let img: HTMLImageElement = new Image()
    img.onload = () => resolve({ path, status: "ok" })
    img.onerror = () => reject({ path, status: "error" })
    img.src = path
  })

const prefetchImages = (urls: string[]) => Promise.all(urls.map(checkImage))

export default prefetchImages
