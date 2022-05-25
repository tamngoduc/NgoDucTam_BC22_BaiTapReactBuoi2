import React, { Component } from "react";
import data from "./dataGlasses.json";

class Layout extends Component {
  render() {
    const glassesStyle = {
      width: "150px",
      top: "75px",
      right: "60px",
      opacity: "0.9",
    };

    const glassesInfo = {
      width: "270px",
      top: "230px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,165, 0, .5)",
      textAlign: "left",
      height: "100px",
    };

    return (
      <div style={{ backgroundImage: "url(./img/background.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
        <div style={{ backgroundColor: "rgba(0,0,0,.2)", height: "100vh" }}>
          <h3 style={{ backgroundColor: "rgba(0,0,0,.5)" }} className="text-center text-light p-4">
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row text-center mt-5">
              <div className="col-6">
                <div className="position-relative">
                  <img className="position-absolute" src="./img/model.jpg" alt="model" width="50%" />
                  <img style={glassesStyle} className="position-absolute" src="./img/v1.png" alt="" />

                  <div style={glassesInfo} className="position-relative">
                    <span className="font-weight-bold" style={{ color: "#AB82FF", fontSize: "17px" }}>
                      Ten kinh
                    </span>
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Mo ta</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./img/model.jpg" alt="model" width="50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
