import React from "react";
import LiveTV from "../images/live_tv.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.props.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        value: ''
    }
  }

  handleChange(event) {
    const newMovies = this.props.movies.filter((movie) => {
        return movie.name.includes(event.target.value)
    })
    
    this.setState({
        value: event.target.value
    })

    this.props.updateData(newMovies)
  }

  searchData() {
    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.value}`)
  }

  render() {
    return (
      <div id="header">
        <img className="header-logo" src={LiveTV} alt="logo" />
        <h2>BitShow</h2>
        <input onChange={this.handleChange} value={this.state.value} className="header-search" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Header;
