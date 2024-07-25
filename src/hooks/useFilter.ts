import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFilter = (data: any[]) => {
  const searchQuery = useSelector((state: any) => state.filter.searchTerm);
  const [filterData, setFilterData] = useState<any[]>(data);

  useEffect(() => {
    if (data.length > 0) {
      if (searchQuery) {
        const filtered = data.filter(({ info }) =>
          info.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilterData(filtered);
      } else {
        setFilterData(data);
      }
    }
  }, [data, searchQuery]);

  return filterData;
};

export default useFilter;
