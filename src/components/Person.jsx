import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

function Person(props) {
  const { name, gender, species, homeworld } = props;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {gender}
            </Heading>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {homeworld}
            </Heading>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {species}
            </Heading>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export { Person };
