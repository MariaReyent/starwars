import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { getPerson, getStarships, getVehicles } from "../api";

function SinglePerson() {
  const { id } = useParams();
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [data, setData] = useState({});

  const starshipsUrl = data?.starships || [];

  const vehiclesUrls = data?.vehicles || [];

  useEffect(() => {
    getPerson(id).then((data) => setData(data));
  }, [id]);

  useEffect(() => {
    if (starships.length < starshipsUrl.length) {
      starshipsUrl.forEach((url) =>
        getStarships(url).then((data) =>
          setStarships((prev) => [...prev, data])
        )
      );
    }

    if (vehiclesUrls.length && vehicles.length < vehiclesUrls.length) {
      vehiclesUrls.forEach((url) =>
        getVehicles(url).then((data) => setVehicles((prev) => [...prev, data]))
      );
    }
  }, [data]);

  //console.log(vehicles);

  return <div style={{ color: "white" }}>SinglePerson:{id}</div>;
}

export { SinglePerson };
