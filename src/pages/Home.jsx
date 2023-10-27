import { useState, useEffect } from "react";
import { getPeople } from "../api";
import { PeopleList } from "../components/PeopleList";
import { SinglePerson } from "./SinglePerson";
import { Preloader } from "../components/Preloader";

function Home() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(false);
  const [prev, setPrevious] = useState(false);

  function handleNext() {
    setPage((prevCount) => prevCount + 1);
    setPeople([]);
  }

  function handlePrev() {
    setPage((prevCount) => prevCount - 1);
    setPeople([]);
  }

  useEffect(() => {
    getPeople(page).then((data) => {
      if (data) {
        setPeople(data.results);
      }

      if (data.previous) {
        setPrevious(true);
      }
      if (data.next) {
        setNext(true);
      }
    });
  }, [page]);

  if (!people.length) {
    return <Preloader />;
  }

  return (
    <>
      {<PeopleList people={people} />};
      <div className="container">
        <button className="btn" onClick={handlePrev} disabled={!prev}>
          Previous
        </button>
        <button className="btn" onClick={handleNext} disabled={!next}>
          Next
        </button>
      </div>
    </>
  );
}
export { Home };
