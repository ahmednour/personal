import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateProgressCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        }

        // event 
        window.addEventListener('scroll', updateProgressCompletion);
        // clear event
        return () => window.removeEventListener('scroll', updateProgressCompletion);
    }, []);
    return (
        completion
    )
}

export default useScrollProgress