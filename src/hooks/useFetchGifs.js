import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs"

export default function useFetchGifs(category) {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(images => {
                setImages(images)
                setIsLoading(false)
            })
    }, []);


    return {
        images,
        isLoading
    }
}
