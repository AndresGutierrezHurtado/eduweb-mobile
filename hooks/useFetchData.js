import { useState, useEffect } from "react";

const fetchData = async (url, options) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${url}`, {
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
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
    const {
        success,
        message,
        data: responseData,
    } = await fetchData(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
    });

    alert(message);

    return { success, message, data: responseData };
}

export async function usePutData(endpoint, data) {
    const {
        success,
        message,
        data: responseData,
    } = await fetchData(endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
    });

    alert(message);

    return { success, message, data: responseData };
}

export async function useDeleteData(endpoint) {
    const {
        success,
        message,
        data: responseData,
    } = await fetchData(endpoint, {
        method: "DELETE",
    });

    alert(message);

    return { success, message, data: responseData };
}
