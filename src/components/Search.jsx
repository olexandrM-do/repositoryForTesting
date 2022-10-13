import React from "react";
import RadioBtn from "./RadioBtn";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  handleChange = (e, type) => {
    this.props.setMovies(this.state.searchValue || "marvel", type);
  };

  render() {
    return (
      <div className="wrapper-search">
        <div className="row search">
          <input
            value={this.state.searchValue}
            onChange={(e) => this.setState({ searchValue: e.target.value })}
            id="first_name2"
            type="text"
            placeholder="Search"
          />

          <a
            onClick={(e) => {
              e.preventDefault();
              this.handleChange();
            }}
            className="waves-effect waves-light btn-small btn"
            href="!#"
          >
            Search
          </a>
        </div>
        <RadioBtn typeMovie={this.handleChange} />
      </div>
    );
  }
}
export default Search;
