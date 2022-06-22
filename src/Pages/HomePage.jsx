import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.props.updateData.bind(this);
  }

  render() {
    return (
      <div>
        <Header updateData={this.props.updateData} movies={this.props.movies}></Header>
        <div className="movies-wrapper">
          {this.props.movies.map((movie) => (
            <Card funkcija2={this.props.funkcija} singleMovie={movie} />
          ))}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
