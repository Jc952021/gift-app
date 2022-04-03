import { useEffect, useState } from "react";
import GetGifs from "../helpers/GetGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    GetGifs(category).then((res) => setState({ loading: false, data: res }));
  }, []);
  
  return state;
};

export default useFetchGifs;
