import axios from "axios";
import { useEffect, useState } from "react";

const rapidAPIKEY = process.env.REACT_APP_RAPID_API_KEY;

export const useFetch = async (endpoint, query) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/' + endpoint,

        headers: {
            'x-rapidapi-key': rapidAPIKEY,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
            setError(error);
            alert('An error occured');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
};
