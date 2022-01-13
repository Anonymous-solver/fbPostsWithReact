import React, { Component } from "react";
import img from "../images/post.png";

class Navbar extends Component {

  render() {
	const {likeCount, disLikeCount, loveCount, shareCount, sadCount} = this.props
    return (
      <>
        <nav
          style={{ height: "80px" }}
          className="navbar fixed-top navbar-light bg-primary"
        >
          <a
            className="navbar-brand"
            href="#"
            style={{ marginLeft: "2%", color: "white" }}
          >
            <i style={{ marginTop: "20px" }} className="fa fa-facebook"></i>
          </a>

          <span
            style={{
              marginBottom: "10px",
              height: "8px",
              width: "70%",
              marginRight: "15%",
            }}
            className="input-group mb-3"
          >
            <div className="input-group-prepend">
              <span className="input-group-text">All</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Post"
              aria-label="Amount (to the nearest dollar)"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i style={{ padding: "4px" }} className="fa fa-search"></i>
              </span>
            </div>
          </span>

          {/* <i style={{margin: '5px'}} className="fa fa-user" aria-hidden="true">Anik</i> */}

          {/* <h5
            className="navbar-brand"
            style={{ marginRight: "20px", color: "white" }}
          >
            Like {likeCount}
          </h5>

          <h5 className="navbar-brand" style={{ color: "white" }}>
            Dislike {disLikeCount}
          </h5>

		  <h5 className="navbar-brand" style={{ color: "white" }}>
            Love {loveCount}
          </h5>

		  <h5 className="navbar-brand" style={{ color: "white" }}>
            Sad {sadCount}
          </h5>

		  <h5 className="navbar-brand" style={{ color: "white" }}>
            Share {shareCount}
          </h5> */}
        </nav>
      </>
    );
  }
}

export default Navbar;
