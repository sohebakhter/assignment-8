import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios('../apps.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => setLoader(false))

    }, []);
    return { apps, loader, error }
}

export default useApps