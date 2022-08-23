import { Button } from "flowbite-react";
import React, { useState } from "react";

const Home = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="home">
      <h1 className="text-primary text-3xl font-bold">
        React is up and running
      </h1>
      <p>You've clicked {clicks} times</p>
      <Button onClick={() => setClicks(clicks + 1)}>Click me!</Button>
    </div>
  );
};

export default Home;
