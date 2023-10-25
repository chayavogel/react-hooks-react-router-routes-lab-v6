import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  }, [])

  const info = actors && actors.map((actor) => {
    return (
      <article key={`article-${actor.id}`}>
        <h2 key={`h2-${actor.id}`}>{actor.name}</h2>
        <ul>
        {actor.movies.map((movie) => {
          return <li key={`ul-${movie}`}>{movie}</li>
        })}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {info}
      </main>
    </>
  );
};

export default Actors;
