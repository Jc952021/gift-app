

const GetGifs = async(categoria) => {

  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=r1JtMmsN1tCGyFBgRHyEJNrJUw52SJer`
    const res = await fetch(url)
    const {data} = await res.json() //acceder a su data que sera un arr

    const gifs = data.map(img=>({
      id:img.id,
      title:img.title,
      url:img.images.downsized.url
    }))
    return gifs
}

export default GetGifs