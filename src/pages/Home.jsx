import { useState, useEffect } from "react";
import { getPeople } from "../api";
import { PeopleList } from "../components/PeopleList";
import { Preloader } from "../components/Preloader";

function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data.people);
      console.log(data);
    });
  }, []);

  return !people.length ? <Preloader /> : <PeopleList />;
}
export { Home };
