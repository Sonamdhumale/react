import React, { Component } from "react";
import Spinner from "../resources/spinner.gif";

export default class FetchPosts extends Component {
  state = {
    loading: true,
    data: [],
  };

  async componentDidMount() {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        this.setState({ data: data.splice(0, 10), loading: false });
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log("inside render");

    if (this.state.loading) {
      return <img src={Spinner} className="fp-loader" alt="loading" />;
    }
    if (!this.state.data) {
      return <div>didn't get posts</div>;
    }

    return (
      <div className="fetch-posts">
        {
          <ul>
            {this.state.data.map((item) => {
              return (
                <li key={item.id}>
                  <h3 className="title">
                    <a href={`/Modifications/${item.id}`}>{item.title}</a>
                  </h3>
                  <p className="body">Body:{item.body}</p>
                  <div> </div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}
