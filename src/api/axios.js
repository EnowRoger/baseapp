import axios from "axios"

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getposts = async () => {
    const repose = await api.get("/post")
    return Response.data
}