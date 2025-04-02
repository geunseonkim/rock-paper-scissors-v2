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
  userDefault: {
    name: "userDefault",
    img: "https://i.pinimg.com/474x/94/35/4f/94354fcdbef8d34b1c5c3e34e9a418ec.jpg",
  },
  computerDefault: {
    name: "computerDefault",
    img: "https://www.meme-arsenal.com/memes/a77f2aab4a639c755251f7f7044482c5.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(choice.userDefault);
  const [computerSelect, setComputerSelect] = useState(choice.computerDefault);
  const [userMatch, setUserMatch] = useState(null);
  const [computerMatch, setComputerMatch] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const play = (userChoice) => {
    // console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomPlay();
    setComputerSelect(choice[computerChoice]);

    const loseCases = {
      Rock: "Paper",
      Paper: "Scissors",
      Scissors: "Rock",
    };

    if (userChoice === computerChoice) {
      setUserMatch("TIE");
      setComputerMatch("TIE");
    } else if (loseCases[userChoice] === computerChoice) {
      setUserMatch("LOSE");
      setComputerMatch("WIN");
      setComputerScore(computerScore + 1);
    } else {
      setUserMatch("WIN");
      setComputerMatch("LOSE");
      setUserScore(userScore + 1);
    }
  };

  const reset = () => {
    setComputerScore(0);
    setUserScore(0);
    setUserSelect(choice.userDefault);
    setComputerSelect(choice.computerDefault);
    setUserMatch(null);
    setComputerMatch(null);
  };

  const randomPlay = () => {
    let computerChoiceArray = Object.keys(choice);
    let choiceIdx = Math.floor(Math.random() * 3);
    return computerChoiceArray[choiceIdx];
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <div>
        <h1>Rock paper scissors</h1>
      </div>

      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="contents contents-score">
        <div>
          <p>
            user score: <span>{userScore}</span>
          </p>
        </div>
        <div>
          <p>
            computer score: <span>{computerScore}</span>
          </p>
        </div>
        <div
          className={`item-btn item-btn-score ${
            darkMode ? "dark-mode-btn" : ""
          }`}
        >
          <button onClick={() => reset()}>RESET</button>
        </div>
      </div>

      <div className="contents">
        <Box title="User" item={userSelect} victory={userMatch} />
        <Box title="Computer" item={computerSelect} victory={computerMatch} />
      </div>
      <div className={`item-btn ${darkMode ? "dark-mode-btn" : ""}`}>
        <button onClick={() => play("Rock")}>Rock</button>
        <button onClick={() => play("Paper")}>Paper</button>
        <button onClick={() => play("Scissors")}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
