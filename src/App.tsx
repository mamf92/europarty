import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Home from "./pages/Home";
import SelectDifficulty from "./pages/SelectDifficulty";
import Quiz from "./components/Quiz";
import QuizResults from "./pages/QuizResults";
import Scoreboard from "./pages/Scoreboard";
import MultiplayerLobby from "./pages/MultiplayerLobby";
import Lobby from "./pages/Lobby";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-difficulty" element={<SelectDifficulty />} />
          <Route path="/quiz/:difficulty" element={<Quiz />} />
          <Route path="/results" element={<QuizResults />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/multiplayer" element={<MultiplayerLobby />} />
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
