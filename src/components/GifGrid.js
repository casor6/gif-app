import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    // useEffect( () => {
    //     getGifs( category)
    //         .then( setImages )
    // }, [ category ])
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            { loading && <p>Loading</p>}
            <div className="card-grid">
                
                
                { 
                    images.map(img => 
                        (<GifGridItem 
                            key={ img.id }
                            { ...img }
                        />)
                    )
                }
                
            </div>
        </>
    )
}
