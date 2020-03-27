
import React, { Component } from "react";


import Footer from "components/Footer/Footer.jsx";
import bgImage from "assets/img/full-screen-image-3.jpg";
import RegisterPage from "../views/Pages/RegisterPage"
class Pages extends Component {
  render() {
    return (
      <div style={{color:"white"}}>    
        <div className="wrapper wrapper-full-page">
          <div
            className={"full-page"}
            data-color="black"
            data-image={bgImage}
          >
            <div className="content">
             <RegisterPage/>
            </div>
            <Footer transparent />
            <div
              className="full-page-background"
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;
