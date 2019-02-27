import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGif } from "../actions";
import Gif from "./gif";

class GifDetails extends Component {
  componentDidMount() {
    const { id, gifs } = this.props;
    if (!gifs || gifs.length === 0) {
      this.props.fetchGif(id);
    }
  }

  render() {
    const { gif } = this.props;
    if (!gif) {
      return null;
    }
    return (
      <div className="gif-details">
        <Gif id={gif.id} slug={gif.slug} url={gif.images.original.url} />
        <p>
          <strong>Title:</strong>
          <span className="gif-details__title">{gif.title}</span>
        </p>
        <p>
          <strong>Source:</strong>
          <a className="gif-details__source" href={gif.source}>
            {gif.source}
          </a>
        </p>
        <p>
          <strong>Rating:</strong>{" "}
          <span className="gif-details__rating">{gif.rating}</span>
        </p>
      </div>
    );
  }
}

GifDetails.defaultProps = {
  gifs: []
};

const findGif = (gifs, id) => {
  if (!gifs) {
    return null;
  }
  return gifs.find(gif => gif.id === id);
};

const mapStateToProps = (state, ownProps) => {
  const { gifs } = state;
  const id = ownProps.match.params.id;
  return {
    id,
    gif: findGif(gifs, id)
  };
};

export default connect(
  mapStateToProps,
  { fetchGif }
)(GifDetails);
