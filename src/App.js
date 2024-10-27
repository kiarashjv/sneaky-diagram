import React, { useState, useEffect } from "react";
import SankeyDiagram from "./SankeyDiagram";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("here");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/process-data")
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data, null, 2));
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  return <SankeyDiagram data={data} />;
};

export default App;
