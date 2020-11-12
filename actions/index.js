import { useState } from "react";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200 || !res.ok) {
      return Promise.reject(res);
    } else {
      return result;
    }
  });

  export const useApiHandler = (apiCallback) => {
    const [data, setData] = useState({
        data: null,
        error: null,
        loading: false
    });

    const handler = async (...data) => {
        setData({ data: null, error: null, loading: true });
        try{
            const result = await apiCallback(...data);
            setData({ data: result.data, error: null, loading: false });
            return result.data;
        } catch (e) {
            const error = (e.response && e.response.data) || 'Something went wrong';
            debugger;
            setData({ data: null, error: error, loading: false });
            Promise.reject(error);
        }
    }

    return [ handler , {...data} ]
}