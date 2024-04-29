export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/channels/search?api_key=R4z1afWqSBQDCoxjKsvRAvGGw1lROWVf&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.display_name,
        url: img.banner_image,
    }));
    return gifs;

}