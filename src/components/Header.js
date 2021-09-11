import { useState, useEffect } from "react";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import Fetch from "../Fetch";

const Header = ({ urlString }) => {
  var logo =
    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";
  const [Movie, setMovie] = useState();

  const onscrollHandler = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    Fetch(urlString).then(({ data, id }) => {
      var n = Math.random() * 10;
      n = parseInt(n);
      setMovie(data[n]);
    });
  }, []);

  return (
    <div onScroll={onscrollHandler}>
      <div className="navbar">
        <img src={logo} alt="" />
        <div className="icons">
          <FaSearch />
          <FaUserAlt />
        </div>
      </div>
      {Movie && (
        <div
          className="header"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${Movie.backdrop_path})`,
          }}
        >
          <div className="overlay"></div>
          <div className="content">
            <h2>{Movie.title}</h2>
            <p>{Movie.overview.slice(0, 200) + "..."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
