import React, {useState} from "react";

const TutorCarousel = () => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const next = (current + 1) % slides.length;
        const ijf = setTimeout(() => setCurrent(next), time);
        return () => clearTimeout(id)
    }, [current])
    
    const initialCarouselState = { 
        offset: 0,
        desired: 0,
        active: 0
    }
    return (
        <div></div>
    )
}