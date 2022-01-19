import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const {
      likeCount,
      disLikeCount,
      loveCount,
      shareCount,
      sadCount,
      loggedInUser,
    } = this.props;
    return (
      <>
        <nav
          style={{ height: "80px" }}
          className="navbar fixed-top navbar-light bg-primary"
        >
          <a
            className="navbar-brand"
            href="/"
            style={{ marginLeft: "2%", color: "white" }}
          >
            <i style={{ marginTop: "20px" }} className="fa fa-facebook"></i>
          </a>

          <span
            style={{
              marginBottom: "10px",
              height: "8px",
              width: "35%",
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

          <span>
            <img
              style={{ width: "50%", borderRadius: "100px" }}
              src={loggedInUser.photoURL}
              alt="null"
            />
          </span>
          <span>
            <Link to="/login">
                <button
                    style={{
                        marginRight: "20px",
                        padding: "8px",
                        border: "1px solid white",
                        boxShadow: "1px 1px 10px gray",
                        borderRadius: "20px",
                    }}
                    >
                    <i className="fa fa-sign-out">logout</i>
                    </button>
            </Link>
          </span>

          <h5
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
          </h5>
        </nav>
      </>
    );
  }
}

export default Navbar;
