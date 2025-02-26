import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8787',

    headers: {
        'Content-Type': 'application/json',
    }
});

// adding dynmic headers
api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").token;
    if (token) {
        config.headers.Authorization = token;
    }
    return config
})
// done

export interface BlogTypes {
    "content": string;
    "title": string;
    "userid": string
}


export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<BlogTypes[]>([]);

    useEffect(() => {
        try {

            api.get("/api/v1/blog/bulk")
                .then(response => {
                    setLoading(true);
                    setBlogs(response.data);
                })
        } catch (e) {
            if (isAxiosError(e)) {
                console.log(e)
            }
        }
    }, []);

    return {
        loading,
        blogs
    }
}
