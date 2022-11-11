import { useEffect } from "react"

// For Dynamic Title
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Road to Knowledge`;
    }, [title])
};

export default useTitle;