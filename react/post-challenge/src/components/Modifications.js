import React, { Component } from "react";

export default class Modifications extends Component {
  constructor() {
    super();
    this.eleRef = React.createRef();
  }
  sss = () => {
    console.log("a");
    this.eleRef.current.innerHTML = "get out ";
  };
  render() {
    console.log("inside modification");
    return (
      <div>
        <p id="pele" ref={this.eleRef} onClick={this.sss}>
          welcome
        </p>
        <a href="/FetchPosts">Cancel</a>
      </div>
    );
  }
}
