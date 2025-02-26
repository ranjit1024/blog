import axios from "axios";
import { useEffect, useState } from "react";
const api = axios.create({
    baseURL: 'http://127.0.0.1:8787',

    headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem("token") || "").token
    }
});

export interface BlogTypes {
    "content": string;
    "title": string;
    "userid": string
}


export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<BlogTypes[]>([]);

    useEffect(() => {
        api.get("/api/v1/blog/bulk")
            .then(response => {
                setBlogs(response.data);
                setLoading(true);
            })
    }, []);

    return {
        loading,
        blogs
    }
}
