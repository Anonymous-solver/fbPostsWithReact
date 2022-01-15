import React, { Component } from "react";
import Dislike from "./reactions/dislike.component";
import Like from "./reactions/like.component";
import Love from "./reactions/love.component";
import Sad from "./reactions/sad.component";
import Share from "./reactions/share.component";
import img from "../images/post.png";

var commentText = "";
class Post extends Component {
  state = {
    comments: [],
  };
  onChange(event) {
    commentText = event.target.value;
  }

  handleEnter = (event) => {
    if (event.key === "Enter" && commentText !== "") {

      if (commentText.length > 1) {
        const comments = [...this.state.comments];
        comments.push(commentText);
        event.target.value = "";
        console.log(event.target.value);
        this.setState({ comments });
      }
    }
  };
  render() {
    const {
      handleLike,
      handleDislike,
      handleLove,
      handleSad,
      handleShare,
      handleRemove,
      id,
      title,
      date,
      description,
      like,
      dislike,
      love,
      sad,
      share,
      comment,
      commentEmpty,
    } = this.props;
    return (
      <>
        <div
          className="card text-black bg-light mb-3"
          style={{
            marginTop: "5px",
            marginLeft: "20%",
            width: "50rem",
            border: "1px solid gray",
            boxShadow: "1px 1px 10px gray",
            padding: "5px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span style={{ color: "gray" }} className="card-text">
              {date}
            </span>
            <br />
            <img
              style={{ width: "70%", height: "15rem", borderRadius: "5px" }}
              src={img}
              alt="null"
            />
            <hr />
            <p className="card-text">{description}</p>
            <hr />

            <div>
              <input
                type="text"
                name="comment"
                id="comment"
                style={{
                  border: "1px solid white",
                  width: "25rem",
                  borderRadius: "10px",
				  padding: '10px'
                }}
                value={commentEmpty}
                placeholder=" Write a comment..."
                onChange={this.onChange}
                onKeyDown={this.handleEnter}
                required
              />
              {this.state.comments.map((comment, index) => {
                return (
                  <div
                    key={index}
                    style={{
					  width: "50%",
                      paddingLeft: "20px",
					  paddingRight: '20px',
					  paddingTop: '5px',
					  paddingBottom: '5px',
                      margin: "10px",
                      borderRadius: "50px",
					  border: "1px solid white",
					  background: "#F2F3F5"
                    }}
                  >
                    <p className="card-text">{comment}</p>
                  </div>
                );
              })}

            </div>
            <br />
            {comment ? <div>{comment}</div> : <div></div>}

            <button
              onClick={() => handleLike(id)}
              style={{
                margin: "10px",
                borderRadius: "50px",
                border: "1px solid white",
              }}
              disabled={dislike || love || sad}
            >
              <Like like={like}></Like>
            </button>
            <button
              onClick={() => handleDislike(id)}
              style={{
                margin: "10px",
                borderRadius: "50px",
                border: "1px solid white",
              }}
              disabled={like || love || sad}
            >
              {" "}
              <Dislike dislike={dislike}></Dislike>
            </button>
            <button
              onClick={() => handleLove(id)}
              style={{
                margin: "10px",
                borderRadius: "50px",
                border: "1px solid white",
              }}
              disabled={dislike || like || sad}
            >
              {" "}
              <Love love={love}></Love>
            </button>
            <button
              onClick={() => handleSad(id)}
              style={{
                margin: "10px",
                borderRadius: "50px",
                border: "1px solid white",
              }}
              disabled={dislike || like || love}
            >
              {" "}
              <Sad sad={sad}></Sad>
            </button>
            <button
              onClick={() => handleShare(id)}
              style={{ borderRadius: "50px", border: "1px solid white" }}
            >
              {" "}
              <Share share={share}></Share>
            </button>
            <button
              style={{
                borderRadius: "50px",
                border: "1px solid white",
                marginLeft: "180px",
              }}
              onClick={() => handleRemove(id)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default Post;
