import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPerson, getStarships, getVehicles } from "../api";
import { Card, CardBody, Text, Image, Heading } from "@chakra-ui/react";

function SinglePerson() {
  const { id } = useParams();
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [data, setData] = useState({});
  const personId = id
    .replace("https://swapi.dev/api/people/", "")
    .replace("/", "");

  const imgSrc = `../image/${personId}.jpg`;

  const navigation = useNavigate();
  function goBack() {
    navigation(-1);
  }

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

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      <Card maxW="sm" backgroundColor="#0f040f" margin="auto">
        <CardBody>
          <Image src={imgSrc} />
          {vehicles.length > 0 ? (
            <>
              <Heading
                className="glow"
                style={{
                  color: "purple",
                  fontWeight: "bold",
                }}
              >
                Vehicles:
              </Heading>
              {vehicles.map((vehicle, index) => (
                <Text color="white" key={index}>
                  {vehicle.name}
                </Text>
              ))}
            </>
          ) : (
            <Text style={{ color: "purple" }}>No vehicles available</Text>
          )}

          {starships.length > 0 ? (
            <>
              <Heading
                className="glow"
                style={{
                  color: "purple",
                  fontWeight: "bold",
                }}
              >
                Starships:
              </Heading>
              {starships.map((starship, index) => (
                <Text color="white" key={index}>
                  {starship.name}
                </Text>
              ))}
            </>
          ) : (
            <Text style={{ color: "purple" }}>No starships available</Text>
          )}
        </CardBody>
      </Card>
    </>
  );
}

export { SinglePerson };
