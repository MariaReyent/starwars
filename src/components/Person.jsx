import { Card, Text, CardBody } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";

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
      </CardBody>
    </Card>
  );
}

export { Person };
