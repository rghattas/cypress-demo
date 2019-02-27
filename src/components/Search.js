import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import queryString from "query-string";
import { fetchGifs } from "../actions/index";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

class Search extends Component {
  componentDidMount() {
    const { term } = this.props;
    if (term) {
      this.props.fetchGifs(term);
    }
  }

  componentDidUpdate(prevProps) {
    const { term } = this.props;
    if (prevProps.term !== term) {
      this.props.fetchGifs(term);
    }
  }

  render() {
    const { gifs, term } = this.props;
    return (
      <div className="search">
        <SearchBar defaultValue={term} history={this.props.history} />;
        <GifList gifs={gifs} />
      </div>
    );
  }
}

Search.propTypes = {
  term: PropTypes.string,
  fetchGifs: PropTypes.func.isRequired
};

Search.defaultProps = {
  term: undefined
};

const mapStateToProps = (state, ownProps) => {
  const { gifs } = state;
  const { location } = ownProps;
  const term = queryString.parse(location.search).q;

  return {
    term,
    gifs
  };
};

export default connect(
  mapStateToProps,
  {
    fetchGifs
  }
)(Search);
