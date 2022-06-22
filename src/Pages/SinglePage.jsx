import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header></Header>
        <button
          onClick={() => {
            this.props.backToHome();
          }}
        >
          Back to home
        </button>
        <h2>This is single page</h2>
        <Footer></Footer>
      </div>
    );
  }
}

export default SinglePage;
