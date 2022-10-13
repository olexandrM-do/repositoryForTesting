import React from "react";
import CardList from "./CardList";
import Preloader from "./Preloader";
import Search from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      notFound: false,
      loading: false,
    };
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies = (name = "marvel", type = "") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?s=${name}&apikey=${API_KEY}&plot=short&type=${type}`
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        this.setState({ loading: false });
        console.log(d);
        if (d.Error) this.setState({ notFound: true });
        else {
          this.setState({ movies: d.Search });

          this.setState({ notFound: false });
        }
      });
  };
  render() {
    return (
      <div className="container-main content">
        <Search setMovies={this.getMovies} />
        {this.state.loading ? <Preloader /> : null}

        {this.state.notFound ? (
          <h1>Not found</h1>
        ) : (
          <CardList list={this.state.movies} />
        )}
      </div>
    );
  }
}

export default Main;
