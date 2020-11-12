import axios from "axios";
import useSWR from "swr";
import { useApiHandler } from "./index";
import { fetcher } from "./index";


 async function sendPortfolio(data) {
    return await axios.post('/api/v1/portfolios', data);
}

async function updatePortfolio(id, data) {
  return await axios.patch('/api/v1/portfolios/' + id, data);
}

async function deletePortfolio(id) {
  return await axios.delete('/api/v1/portfolios/' + id);
}

export const useUpdateProtfolio = () => {
  return useApiHandler(updatePortfolio)
}

export const useSendProtfolio = () => {
    return useApiHandler(sendPortfolio)
}

export const useDeletePortfolio = () => {
  return useApiHandler(deletePortfolio);
}


export const useGetPortfolioById = (id) => {
  const { data, error, ...rest } = useSWR(id ? "/api/v1/portfolios/" + id : null , fetcher);
  return { data, error, loading: !data && !error, ...rest };
};