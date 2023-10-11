import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStarshipsUrl } from "../api";
import { Preloader } from "../components/Preloader";

function SinglePerson() {
  const { starships, homeworld } = props;
  const { url } = useParams();
  const [people, setPeople] = useState({});

  const starshipsId = url
    .replace("https://swapi.dev/api/people/starships/", "")
    .replace("/", "");

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getStarshipsUrl(starshipsId).then((data) => setPeople(data.starships));
  }, [starshipsId]);

  if (!people.url) {
    return <Preloader />;
  }

  return (
    <div>
      {people && (
        <>
          <button onClick={goBack}>Go back</button>
          <h1 text-color="white">{people.starships}</h1>
        </>
      )}
    </div>
  );
}

export { SinglePerson };
