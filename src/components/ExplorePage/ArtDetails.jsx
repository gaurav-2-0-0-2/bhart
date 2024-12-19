import {useParams} from "react-router";
import {Images} from "./Images.js"

export default function ArtDetails() {
    const {id} = useParams();
    
    const art = Images.find((image)=> image.id === id)
    if (!art) {
        alert("Art Not Found!!!!")
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center">{art.artName}</h1>
            <img src={art.image_src} alt={art.artName} className="my-4 w-full max-w-lg mx-auto" />
            <p className="mt-7 text-gray-600">{art.desc || "No description available."}</p>
        </div>
    )
}
