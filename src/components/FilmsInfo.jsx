import { useState, useEffect } from "react";
import { getSingleEntityByUrl } from "../api";

function FilmsInfo({ url }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSingleEntityByUrl(url)
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.name) {
    return null;
  }

  return <div style={{ color: "white" }}>{data.name}</div>;
}

export { FilmsInfo };
