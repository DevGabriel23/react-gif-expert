import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {
    
    const { images, isLoading } = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<p>Loading...</p>)
            }
            <div className="card-grid">
                {images.length > 0 ?
                    images.map(({id, title,url}) => (
                        <GifItem 
                            key={id} 
                            url={url} 
                            title={title.replaceAll(' ','') === '' ? `${category} GIF` : title}
                        />
                    )) :
                    <>
                        <p>No GIFs found for {category}</p>
                    </>
                }
            </div>
        </>
    )
}   
