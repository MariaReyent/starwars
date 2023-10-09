import { Person } from "./Person";
import { Grid } from "@chakra-ui/react";

function PeopleList({ people }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </Grid>
  );
}
export { PeopleList };
