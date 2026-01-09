import { useQuiz } from "./contexts/QuizContext";
import Button from "./components/Button/Button";
import FinishScreen from "./components/FinishScreen/FinishScreen";
import Header from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";
import Questions from "./components/Questions/Questions";
import StartScreen from "./components/StartScreen/StartScreen";
import Loader from "./components/Loader/Loader";
import Options from "./components/Options/Options";
import Theme from "./components/Theme/Theme";
import ErrorMessage from "./components/Error/ErrorMessage";

export default function App() {
  const { status, handleSubmit, answer, dispatch } = useQuiz();

  return (
    <div>
      <Header>
        <HeaderTitle />
        <Theme />
      </Header>
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen />}
        {status === "error" && <ErrorMessage />}
        {status === "start" && (
          <Questions>
            <Options />
            <Button onClick={handleSubmit}>
              {answer ? `Next Question` : `Submit answer`}
            </Button>
          </Questions>
        )}
        {status === "finish" && (
          <>
            <FinishScreen />
            <Button onClick={() => dispatch({ type: "again" })}>
              Play Again
            </Button>
          </>
        )}
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}
