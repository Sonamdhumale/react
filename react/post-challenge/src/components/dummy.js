import React, { Component } from "react";
import Spinner from "../resources/spinner.gif";

export default class FetchPosts extends Component {
  state = {
    loading: true,
    data: [],
  };
  // dynamic import
  dunc = async () => import("./Modifications");
  async componentDidMount() {
    try {
      const comp = await this.dunc();
      if (comp) this.setState(false);
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
      return <comp>didn't get posts</comp>;
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

//dynamic import
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import FetchPosts from "./components/FetchPosts";
import Modifications from "./components/Modifications";
import Spinner from "./resources/spinner.gif";

class DynamicImport extends React.Component {
  state = {
    component: null,
  };
  componentDidMount() {
    console.log("in did mount ");
    setTimeout(() => {
      this.props.load().then((mod) =>
        this.setState(() => ({
          component: mod.default,
        }))
      );
    }, 10000);
  }
  render() {
    return this.props.children(this.state.component);
  }
}
const Loading = () => (
  <div className="">
    <h1>Loading</h1>
    <img src={Spinner} className="fp-loader" alt="loading" />
  </div>
);

const FetchPosts = (props) => (
  <DynamicImport load={() => import("./components/FetchPosts")}>
    {(Component) =>
      Component === null ? <Loading /> : <Component {...props} />
    }
  </DynamicImport>
);

export default class App extends Component {
  render() {
    console.log("inside app");
    return (
      <div className="App">
        <Router>
          <Route path="/" exact>
            <FetchPosts />
          </Route>
          <Route path="/FetchPosts" exact>
            <FetchPosts />
          </Route>
          <Route path="/Modifications/:id" exact>
            <Modifications />
          </Route>
        </Router>
      </div>
    );
  }
}
console.log("first statement");
