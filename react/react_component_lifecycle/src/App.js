import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("APP CONSTRUCV");
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }
  componentDidMount() {
    console.log("App : Component did mount");
    console.log("-------------------");
  }

  componentDidUpdate(prevProps, pervState, snapshot) {
    console.log("app: component did update");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("app: should component update - render");
    return true;
  }
  render() {
    console.log("app render");
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount counter
        </button>
        <button onClick={this.ignoreProp}>Ignore prop</button>
        <button onClick={this.seedGenerator}>Generate seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount && (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
