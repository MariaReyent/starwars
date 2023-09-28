import { Person } from "./Person";

function PeopleList({ people }) {
  return (
    <div className="list">
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
}
export { PeopleList };
