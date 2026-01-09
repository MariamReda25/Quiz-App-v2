import { useQuiz } from "../../contexts/QuizContext";
import "./Header.css";
function Header({ children }) {
  const { title } = useQuiz();
  return (
    <header
      className="header"
      style={
        title !== ""
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-end" }
      }
    >
      {children}
    </header>
  );
}

export default Header;
