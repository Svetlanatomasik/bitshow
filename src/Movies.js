import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "./movies.css";
import HomePage from "./Pages/HomePage";
import SinglePage from "./Pages/SinglePage";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.setSelectedMovie = this.setSelectedMovie.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.state = {
      selectedMovie: "",
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  setSelectedMovie() {
    this.setState({
      selectedMovie: true,
    });
  }

  backToHome() {
    this.setState({
      selectedMovie: false,
    });
  }

  fetchData() {
    fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((response) =>
    this.setState({
      data: response
      .sort((a, b) => b.rating.average - a.rating.average)
      .filter((e, i) => i < 50),
    })
    );
    // console.log("ovo je fetch",fetch)
  }

  updateData(newData) {
    if(newData) {
      console.log('this ', this);
      this.setState({
        selectedMovie: '',
        data: newData
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.selectedMovie ? (
          <HomePage movies={this.state.data} updateData={this.updateData} funkcija={this.setSelectedMovie} />
        ) : (
          <SinglePage backToHome={this.backToHome} />
        )}
      </div>
    );
  }
}

export default Movies;
