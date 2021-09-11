import { useEffect, useState } from "react";

const Movie = ({ movie, portrait, height }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    var data = portrait ? movie.poster_path : movie.backdrop_path;
    var str = `https://image.tmdb.org/t/p/original${data}`;
    setUrl(str);
  }, [movie, portrait]);

  return (
    <>
      <div id="movie" style={{ height: height }}>
        <img alt="" src={url} />
      </div>
    </>
  );
};

export default Movie;
