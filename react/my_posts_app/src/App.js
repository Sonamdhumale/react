
import React, { useState,useEffect } from "react";
import FullPageLoader from "./components/FullPageLoader";
import Spinner from "./resources/spinner.gif";

export default  function App() {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setLoader(false);
      setData (data);
    });
  },[])

  
  return (
    <div className="App">
      {loader ? (
        <img src={Spinner} className="fp-loader" alt="loading" />
      ) : (
        <FullPageLoader data={data} />
      )}
    </div>
  );
}
