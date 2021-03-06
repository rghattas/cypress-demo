import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Gif from "./Gif";

const GifList = ({ gifs }) => {
  if (!gifs || gifs.length === 0) {
    return null;
  }
  return (
    <ul className="gif-list">
      {gifs.map(gif => (
        <li key={gif.id} className="gif-list__item">
          <Link to={`/gifs/${gif.id}`}>
            <Gif id={gif.id} slug={gif.slug} url={gif.images.downsized.url} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

GifList.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  )
};

GifList.defaultProps = {
  gifs: []
};

export default GifList;
