
import { render } from "@testing-library/react";
import React, { useState,useEffect, Component } from "react";
//import FullPageLoader from "./components/FullPageLoader";
import Spinner from "./resources/spinner.gif";

class PostsList extends Component {
  state ={
    posts : [
      {
        id : '',
        title : '',
        body : ''
      }
    ]
  }
}

fetchPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postsList) => {
       this.setState({posts :postsList })
     });
}
