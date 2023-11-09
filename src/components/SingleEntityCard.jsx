import { Card, Text, CardBody } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function SingleEntityCard(props) {
  const {
    name,
    url = "",
    planetsCount = null,
    starshipCount = null,
    producer = "",
    opening_crawl = "",
  } = props;

  const entityId = url
    ? url.replace("https://swapi.dev/api/people/", "").replace("/", "")
    : null;

  const imgSrc = entityId ? `./image/${entityId}.jpg` : "";

  return (
    <Card className="card">
      <CardBody className="bg">
        {!!imgSrc && <img src={imgSrc} />}
        {!!name && (
          <Text
            color="white"
            textAlign="center"
            fontSize="20px"
            className="glow"
          >
            {name}
          </Text>
        )}

        <Text color="white" textAlign="center" fontSize="20px" as="div">
          {planetsCount ? <div>Planets Count : {planetsCount}</div> : null}
        </Text>

        <Text color="white" textAlign="center" fontSize="20px" as="div">
          {starshipCount ? <div>Starships Count : {starshipCount}</div> : null}
        </Text>
        {!!producer && (
          <Text color="white" textAlign="center" fontSize="20px">
            Producer: {producer}
          </Text>
        )}
        {!!opening_crawl && (
          <Text color="white" textAlign="center" fontSize="20px" as="div">
            {opening_crawl}
          </Text>
        )}
        {!!entityId && (
          <Link to={`/people/${entityId}`} className="btn">
            See Details
          </Link>
        )}
      </CardBody>
    </Card>
  );
}

export { SingleEntityCard };
