import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const call = await fetch("https://fruits-develhope.herokuapp.com/api");
        const response = await call.json();
        setData(() => response.fruits);
        setLoad(false);
        return response;
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return [data, load, error];
};

//  ""
