import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, [])

  const info = directors && directors.map((director) => {
    return (
      <article key={`article-${director.id}`}>
        <h2 key={`h2-${director.id}`}>{director.name}</h2>
        <ul>
        {director.movies.map((movie) => {
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
        <h1>Directors Page</h1>
        {info}
      </main>
    </>
  );
};

export default Directors;
