import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>
            {/* {
            isLoading ? ( <h2>Cargando...</h2> ) : null
           } */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }


            <div className="card-grid">
                {
                    images.map((image) => (
                        // <li key={id}>{title}</li>
                        <GifGridItem key={image.id} {...image}></GifGridItem>

                    ))

                }
            </div>
        </>
    )
}
