import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Puch', 'Dragon Ball'])

    const onAddCategory = newCategorie => {
        if (categories.includes(newCategorie)) {
            return
        }
        setCategories([newCategorie, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(category => <GifGrid key={category} category={category} />)
            }
        </>
    )
}