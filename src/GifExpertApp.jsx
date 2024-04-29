import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
        // setCategories(cat => [...cat, 'Valorant']);
    }



    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />


            {
                categories.map(category => (
                    <GifGrid key={category} category={category}></GifGrid>
                )
                )
            }

        </>
    )
}