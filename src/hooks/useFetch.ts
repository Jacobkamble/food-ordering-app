import axios from "axios";
import { useEffect, useState } from "react";

interface Fetch {
  isLoading: boolean;
  data: any[];
  error: any;
}

const useFetch = (url: string): Fetch => {
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
      setData(
        res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data };
};

export default useFetch;
