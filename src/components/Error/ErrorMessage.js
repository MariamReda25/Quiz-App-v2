import { useQuiz } from "../../contexts/QuizContext";
import "./ErrorMessage.css";
function ErrorMessage() {
  const { message } = useQuiz();
  return (
    <div className="error">
      <p>⛔Error: {message}</p>
    </div>
  );
}

export default ErrorMessage;
