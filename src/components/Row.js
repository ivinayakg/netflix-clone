import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Fetch from "../Fetch";
import Movie from "./Movie";

const Row = ({ urlString, portrait, title }) => {
  const [movies, setMovies] = useState([]);
  const [Id, setId] = useState([]);
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(0);
  const LeftBtn = useRef();
  const [move, setMove] = useState(10);

  const onclickLeft = (e) => {
    const newI = index;
    setIndex(newI === 8 || newI <= 0 ? 0 : newI - 1);
    if (index === 0) {
      LeftBtn.current.style.left = "5rem";
    }
  };
  const onclickRight = () => {
    const newI = index;
    setIndex(
      newI === 8
        ? () => {
            LeftBtn.current.style.left = "5rem";
            return 0;
          }
        : newI + 1
    );
    LeftBtn.current.style.left = "0rem";
  };

  useEffect(() => {
    Fetch(urlString).then(({ data, id }) => {
      setMovies(data);
      setId(id);
    });
    var h = portrait ? 15 : 11;
    setHeight(h);
    if (!portrait) {
      setMove(5);
    } else {
      setMove(10);
    }
  }, [urlString, portrait]);

  return (
    <>
      <h2 className="catergory-name">{title}</h2>
      <div
        className="movie-row"
        style={{
          height: `${height}rem`,
        }}
      >
        <button className="move-left" onClick={onclickLeft} ref={LeftBtn}>
          <FaAngleLeft />
        </button>
        <button className="move-right" onClick={onclickRight}>
          <FaAngleRight />
        </button>
        <div
          className="movie-slider"
          style={{
            transform: `translate3d(${-index * move}%,0,0)`,
          }}
        >
          <ul>
            {Id.map((id) => {
              return (
                <li key={id}>
                  <Movie
                    movie={movies[id]}
                    portrait={portrait}
                    height={`${height * 16}px`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Row;
