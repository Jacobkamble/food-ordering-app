import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (urlStr: string) => {
    try {
      setIsLoading(true);
      const res = (await axios.get(urlStr)).data;

      console.log(res)


      setData(
        res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
    finally{
        setIsLoading(false)
    }
  };

  return { isLoading, error, data };
};

export default useFetch;
