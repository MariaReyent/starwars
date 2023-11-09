import { Card, Text, CardBody } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function Person(props) {
  const { name, url } = props;

  const personId = url
    .replace("https://swapi.dev/api/people/", "")
    .replace("/", "");

  const imgSrc = `./image/${personId}.jpg`;
  console.log(props.test);
  return (
    <Card className="card">
      <CardBody className="bg">
        <img src={imgSrc} />
        <Text color="white" textAlign="center" fontSize="20px">
          {name}
        </Text>
        <Link to={`/people/${personId}`} className="btn">
          See Details
        </Link>
      </CardBody>
    </Card>
  );
}

export { Person };
