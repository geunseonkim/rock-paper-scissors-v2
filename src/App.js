import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

const choice = {
  Rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  Paper: {
    name: "Paper",
    img: "https://www.hobbycraft.co.uk/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8aedf2d1/images/large/584769_1000_1_-white-premium-smooth-paper-a4-100-pack.jpg",
  },
  Scissors: {
    name: "Scissors",
    img: "https://m.media-amazon.com/images/I/51qalNnwIGL.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    // console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice]);
  };
  return (
    <div className="container">
      <div>
        <h1>Rock paper scissors</h1>
      </div>
      <div className="contents">
        <Box title="User" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className="item-btn">
        <button onClick={() => play("Rock")}>Rock</button>
        <button onClick={() => play("Paper")}>Paper</button>
        <button onClick={() => play("Scissors")}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
