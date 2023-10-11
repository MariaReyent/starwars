import { Card, Text, CardBody } from "@chakra-ui/react";
import { SinglePerson } from "../pages/SinglePerson";
import { Link } from "react-router-dom";

function Person(props) {
  const { name, url } = props;

  const personId = url
    .replace("https://swapi.dev/api/people/", "")
    .replace("/", "");

  const imgSrc = `./image/${personId}.jpg`;

  return (
    <Card className="card">
      <CardBody className="bg">
        <img src={imgSrc} />
        <Text color="white" textAlign="center" fontSize="20px">
          {name}
        </Text>
        <Link to={`/people/${url}`} className="btn">
          See Details
        </Link>
      </CardBody>
    </Card>
  );
}

export { Person };
