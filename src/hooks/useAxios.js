import {useState, useEffect} from "react";
import axios from "axios";

axios.defaults.baseURL = "https://imdb-api.com/en/API/";

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
      const errorMessage = result?.data?.errorMessage;
      if(errorMessage){
        setError(errorMessage)
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return {response, error, loading};
};
