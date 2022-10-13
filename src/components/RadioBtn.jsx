import React from "react";

class RadioBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paramSearch: "",
    };
  }
  handleRadioChange = (e) => {
    this.setState({ paramSearch: e.target.dataset.type });
    this.props.typeMovie(e, e.target.dataset.type);
  };

  render() {
    return (
      <div className="radio_btn">
        <p>
          <label>
            <input
              type="radio"
              className="with-gap"
              name="type"
              data-type=""
              checked={this.state.paramSearch == "" ? true : false}
              onChange={this.handleRadioChange}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleRadioChange}
              checked={this.state.paramSearch == "movie" ? true : false}
            />
            <span>Movies</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleRadioChange}
              checked={this.state.paramSearch == "series" ? true : false}
            />
            <span>Serails</span>
          </label>
        </p>
      </div>
    );
  }
}

export default RadioBtn;
