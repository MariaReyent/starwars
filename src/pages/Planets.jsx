import { useEffect, useState } from "react";
import { getPlanets } from "../api";
import { PlanetsList } from "../components/PlanetsList";
import { Preloader } from "../components/Preloader";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(false);
  const [prev, setPrevious] = useState(false);

  function handleNext() {
    setPage((prevCount) => prevCount + 1);
    setPlanets([]);
  }

  function handlePrev() {
    setPage((prevCount) => prevCount - 1);
    setPlanets([]);
  }

  useEffect(() => {
    getPlanets(page).then((data) => {
      if (data) {
        setPlanets(data.results);
      }

      if (data.previous) {
        setPrevious(true);
      }
      if (data.next) {
        setNext(true);
      }
    });
  }, [page]);

  if (!planets.length) {
    return <Preloader />;
  }

  return (
    <>
      {<PlanetsList planets={planets} />};
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
export { Planets };
