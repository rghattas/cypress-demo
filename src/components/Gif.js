import React from "react";

function Gif({ id, url, slug }) {
  return <img className="gif" key={id} src={url} alt={slug} />;
}

export default Gif;
