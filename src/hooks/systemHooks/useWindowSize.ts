import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number
        height: number
        devicePixelRatio: number
    }>({
        width: 1920,
        height: 1080,
        devicePixelRatio: 1,
    })
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
            })
        }

        // Add event listener
        window.addEventListener('resize', handleResize)
        // Call handler right away so state gets updated with initial window size
        handleResize()
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
}

export default useWindowSize
