import { useQuiz } from "../../contexts/QuizContext";
import Option from "../Option/Option";
import "./Options.css";
const choices = new Map([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
]);

function Options() {
  const { questions, currentQuestion } = useQuiz();
  return (
    <>
      <ul className="options">
        {questions[currentQuestion].options.map((option, i) => (
          <Option
            option={option}
            key={option}
            optionNumber={choices.get(i)}
            questionAnswer={questions[currentQuestion].answer}
          />
        ))}
      </ul>
    </>
  );
}

export default Options;
