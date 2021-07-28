import React, { Component } from "react";
import logo from "../assets/logo.jpeg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="layout">
        <div className="row mx-0 justify-content-center">
          <div className="col-md-4 col-lg-3 base">
            <div className="col-md-auto p-4 w-100">
              <div className="profil-section d-grid justify-content-center text-center mb-4">
                <div className="base-img d-flex justify-content-center mb-1">
                  <img src={logo} alt="halo" className="img-fluid" />
                </div>
                <div>
                  <p className="shop-name mb-2">@saree.2176</p>
                  <p className="shop-gretting">Bismillah</p>
                  <p className="shop-gretting">Happy Shopping</p>
                </div>
              </div>
              <div className="button-section text-center mb-3">
                <a href="https://wa.me/+6282187814506">
                  <p>Admin 1</p>
                </a>
              </div>
              <div className="button-section text-center">
                <p>Admin 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
