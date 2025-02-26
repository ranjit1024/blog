import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
const api = axios.create({
    baseURL: ' https://my-app.ranjitdas2048.workers.dev',

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

export function UseYourBlogs() {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<BlogTypes[]>([]);

    const token = localStorage.getItem('token');
    let id = "";
    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { id: string }
        id = decode.id;
    }

    try {
        useEffect(() => {
            api.get(`/api/v1/blog/${id}`)
                .then(response => {
                    setLoading(true)
                    setBlogs(response.data.blog)
                });
        }, [])

    }
    catch (e) {
        if (isAxiosError(e)) {
            console.log(e)
        }
    }

    return { blogs, loading };
} 