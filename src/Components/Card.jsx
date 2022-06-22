import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className="card" onClick={this.props.funkcija2}>
            <img src={this.props.singleMovie.image.medium} alt="movie-image" />
            <h3>{this.props.singleMovie.name}</h3>
        </div>
    }
}

export default Card;