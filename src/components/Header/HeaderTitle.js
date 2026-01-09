import { useQuiz } from "../../contexts/QuizContext";
import Subject from "../Subject/Subject";
import "./Header.css";
function HeaderTitle() {
  const { title, icon, dispatch } = useQuiz();
  if (title === "") return;
  return (
    <div className="header__title" onClick={() => dispatch({ type: "again" })}>
      <Subject title={title} icon={icon} />
    </div>
  );
}

export default HeaderTitle;
