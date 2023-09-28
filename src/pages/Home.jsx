import { useState, useEffect } from "react";
import { getPeople } from "../api";
import { PeopleList } from "../components/PeopleList";
import { Preloader } from "../components/Preloader";

function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((data) => {
      data.people && setPeople(data.people);
    });
  }, []);

  return !people.length ? <Preloader /> : <PeopleList />;
}
export { Home };
