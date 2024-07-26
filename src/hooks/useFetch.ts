import axios from "axios";
import { useEffect, useState } from "react";

interface Fetch {
  isLoading: boolean;
  data: any[];
  error: any;
}

const useFetch = (url: string): Fetch => {
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (urlStr: string) => {
    try {
  
      const res = (await axios.get(urlStr)).data;
      // setData(res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setData(res)

    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data };
};

export default useFetch;
