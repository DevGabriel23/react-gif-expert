import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        let category = categories.find(c => c.toLowerCase() === newCategory.toLowerCase())
        setCategories([category !== undefined ? category : newCategory,...categories.filter(c => c.replaceAll(' ','').toLowerCase() !== newCategory.replaceAll(' ','').toLowerCase())]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}   
