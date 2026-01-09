import { useQuiz } from "../../contexts/QuizContext";
import "./Questions.css";
function Questions({ children }) {
  const { questions, numOfQuestions, currentQuestion, selectedOption } =
    useQuiz();
  return (
    <>
      <div className="questions">
        <h3 className="heading-tertiary mb-medium">
          Question {currentQuestion + 1} of {numOfQuestions}
        </h3>
        <h2 className="heading-secondary mb-large">
          {questions[currentQuestion].question}
        </h2>
        <progress
          max={numOfQuestions}
          value={selectedOption ? currentQuestion + 1 : currentQuestion + 1 - 1}
          className="questions__progress"
        />
      </div>
      {children}
    </>
  );
}

export default Questions;
