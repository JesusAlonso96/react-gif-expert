import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    //use effect ejecuta lo que este dentro al inicio si el seg parametro es [] (parecido a ngOnInit)
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

    
}
