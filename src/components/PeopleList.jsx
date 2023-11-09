import { Person } from "./Person";
import { Grid } from "@chakra-ui/react";
import { SingleEntityCard } from "./SingleEntityCard";

function PeopleList({ people }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {people.map((person) => (
        <SingleEntityCard
          key={person.name}
          name={person.name}
          url={person.url}
        />
      ))}
    </Grid>
  );
}
export { PeopleList };
