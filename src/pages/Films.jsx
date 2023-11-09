import { getFilms } from "../api";
import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { SingleEntityCard } from "../components/SingleEntityCard";
import { FilmsInfo } from "../components/FilmsInfo";
import { Button, Collapse } from "@chakra-ui/react";

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
    counts: [1, 2, 3, 322],
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    counts: [4, 5, 6],
  },
  {
    userId: 3,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    counts: [7, 8, 9],
  },
  {
    userId: 4,
    id: 4,
    title: "et porro tempora",
    completed: true,
    counts: [10, 11, 12],
  },
  {
    userId: 5,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    counts: [13, 14, 15],
  },
  {
    userId: 6,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
    counts: [16, 17, 18],
  },
];

function CardData({ userId, id, description, completed }) {
  return (
    <>
      <div>User Id: {userId} </div>
      <div>Id: {id} </div>
      <div>Title: {description} </div>
      <div>{completed ? "Completed" : "In Progress"} </div>
    </>
  );
}

function Count({ count }) {
  console.log(count);
  return <div>{count}</div>;
}
// return (
//   <>
//     {data.map((item) => {
//       return (
//         <div key={item.id}>
//           <CardData
//             userId={item.userId}
//             id={item.id}
//             description={item.title}
//             completed={item.completed}
//           />
//           Count:
//           {item.counts.map((count, index) => {
//             return <Count count={count} key={count} />;
//           })}
//         </div>
//       );
//     })}
//   </>
// );
function Films() {
  const [films, setFilms] = useState([]);
  const [show, setShow] = useState(false);

  const handleToggle = () =>{ 
    console.log("Button clicked");
    setShow(!show);
  }

  useEffect(() => {
    getFilms().then((data) => {
      if (data) {
        setFilms(data.results);
      }
    });
  }, []);

  if (!films.length) {
    return <Preloader />;
  }

  return (
    <>
      {films.map((film) => {
        const planetsCount = film.planets.length;
        const starshipCount = film.starships.length;
        return (
          <div key={film.title} className="film-card">
            <div className="film-info">
              <SingleEntityCard
                name={film.title}
                planetsCount={planetsCount}
                starshipCount={starshipCount}
                producer={film.producer}
                opening_crawl={film.opening_crawl}
              />
            </div>

            <div className="film-details">
              <div className="column">
                <Button onClick={handleToggle}>STARSHIPS:</Button>
                <Collapse mt={4} isOpen={show}>
                  {film.starships.map((starshipUrl, index) => (
                    <FilmsInfo
                      url={starshipUrl}
                      key={index + new Date() + Math.random()}
                    />
                  ))}
                </Collapse>
              </div>
              {/* <div className="column">
                <div>CHARACTERS:</div>
                {film.characters.map((charactersUrl, index) => (
                  <FilmsInfo
                    url={charactersUrl}
                    key={index + new Date() + Math.random()}
                  />
                ))}
              </div>
              <div className="column">
                <div>PLANETS:</div>
                {film.planets.map((planetsUrl, index) => (
                  <FilmsInfo
                    url={planetsUrl}
                    key={index + new Date() + Math.random()}
                  />
                ))}
              </div>
              <div className="column">
                <div>VEHICLES:</div>
                {film.vehicles.map((vehiclesUrl, index) => (
                  <FilmsInfo
                    url={vehiclesUrl}
                    key={index + new Date() + Math.random()}
                  />
                ))}
              </div>
              <div className="column">
                <div>SPECIES:</div>
                {film.species.map((speciesUrl, index) => (
                  <FilmsInfo
                    url={speciesUrl}
                    key={index + new Date() + Math.random()}
                  />
                ))}
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export { Films };
