import axios from "axios";
import { useApiHandler, fetcher } from "./index";
import useSWR from "swr";

 async function createBlog(data) {
    return await axios.post('/api/v1/blogs', data);
}

async function updateBlog(id, data) {
    return await axios.patch(`/api/v1/blogs/${id}`, data);
}

export const useCreateBlog = () => {
    return useApiHandler(createBlog)
}

export const useUpdateBlog = () => {
    return useApiHandler(updateBlog);
}

export const useGetBlogById = (id) => {
    const { data, error, ...rest } = useSWR(id ? "/api/v1/blogs/" + id : null , fetcher);
    return { data, error, loading: !data && !error, ...rest };
  };
