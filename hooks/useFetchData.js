import { useState, useEffect } from "react";

const fetchData = async (url, options) => {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${url}`, {
        headers: {
            "content-type": "application/json",
            accept: "application/json",
        },
        ...options,
    });
    const data = await response.json();
    return data;
};

export function useGetData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [trigger, setTrigger] = useState(1);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await fetchData(url);
                setData(response?.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchDataAsync();
    }, [url, trigger]);

    const reload = () => {
        setTrigger((prev) => prev + 1);
    };

    return { data, loading, reload };
}

export async function usePostData(endpoint, data) {
    const { success, message, data } = await fetchData(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
    });

    return { success, message, data };
}

export async function usePutData(endpoint, data) {
    const { success, message, data } = await fetchData(endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
    });

    return { success, message, data };
}

export async function useDeleteData(endpoint) {
    const { success, message, data } = await fetchData(endpoint, {
        method: "DELETE",
    });

    return { success, message, data };
}
